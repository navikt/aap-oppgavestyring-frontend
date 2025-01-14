import { requestAzureOboToken, validateToken } from '@navikt/oasis';
import { getAccessTokenOrRedirectToLogin, logError, isLocal } from '@navikt/aap-felles-utils';
import { headers } from 'next/headers';
import { hentLocalToken } from 'lib/services/auth';

const NUMBER_OF_RETRIES = 3;

const getOnBefalfOfToken = async (audience: string, url: string): Promise<string> => {
  const token = getAccessTokenOrRedirectToLogin(await headers());
  if (!token) {
    logError(`Token for ${url} er undefined`);
    throw new Error('Token for simpleTokenXProxy is undefined');
  }

  const validation = await validateToken(token);
  if (!validation.ok) {
    logError(`Token for ${url} validerte ikke`);
    throw new Error('Token for simpleTokenXProxy didnt validate');
  }

  const onBehalfOf = await requestAzureOboToken(token, audience);
  if (!onBehalfOf.ok) {
    logError(`Henting av oboToken for ${url} feilet`, onBehalfOf.error);
    throw new Error('Request oboToken for simpleTokenXProxy failed');
  }

  return onBehalfOf.token;
};

export const fetchProxyNoRetry = async <ResponseBody>(
  url: string,
  scope: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  requestBody?: object,
  nextTag?: string
): Promise<ResponseBody> => {
  const oboToken = isLocal() ? await hentLocalToken() : await getOnBefalfOfToken(scope, url);
  const next = {
    revalidate: 0,
    ...(nextTag ? { tags: [nextTag] } : {}),
  };
  const response = await fetch(url, {
    method,
    body: JSON.stringify(requestBody),
    headers: {
      Authorization: `Bearer ${oboToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    next,
  });
  if (response.status === 204) {
    return undefined as ResponseBody;
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('text')) {
    return (await response.text()) as ResponseBody;
  }

  if (!response.ok) {
    if (response.status === 500) {
      const responseJson = await response.json();
      logError(`klarte ikke å hente ${url}: ${responseJson.message}`);
      throw new Error(`Unable to fetch ${url}: ${responseJson.message}`);
    }
    if (response.status === 404) {
      throw new Error(`Ikke funnet: ${url}`);
    }
  }

  return await response.json();
};
export const fetchProxy = async <ResponseBody>(
  url: string,
  scope: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  requestBody?: object
): Promise<ResponseBody> => {
  const oboToken = isLocal() ? await hentLocalToken() : await getOnBefalfOfToken(scope, url);
  return await fetchWithRetry<ResponseBody>(url, method, oboToken, NUMBER_OF_RETRIES, requestBody);
};

const fetchWithRetry = async <ResponseBody>(
  url: string,
  method: string,
  oboToken: string,
  retries: number,
  requestBody?: object
): Promise<ResponseBody> => {
  if (retries === 0) {
    throw new Error(`Unable to fetch ${url}: ${retries} retries left`);
  }

  const response = await fetch(url, {
    method,
    body: JSON.stringify(requestBody),
    headers: {
      Authorization: `Bearer ${oboToken}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    next: { revalidate: 0 },
  });

  // Mulige feilmeldinger:
  // 500
  // 404
  // 204
  console.log('status', { status: response.status, url });

  if (response.status === 204) {
    return undefined as ResponseBody;
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('text')) {
    return (await response.text()) as ResponseBody;
  }

  if (!response.ok) {
    if (response.status === 500) {
      const responseJson = await response.json();
      logError(`klarte ikke å hente ${url}: ${responseJson.message}`);
      throw new Error(`Unable to fetch ${url}: ${responseJson.message}`);
    }
    if (response.status === 404) {
      throw new Error(`Ikke funnet: ${url}`);
    }

    logError(
      `Kall mot ${url} feilet med statuskode ${response.status}, prøver på nytt. Antall forsøk igjen: ${retries}`
    );
    return await fetchWithRetry(url, method, oboToken, retries - 1, requestBody);
  }

  return await response.json();
};
