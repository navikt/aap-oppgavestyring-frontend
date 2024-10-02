import { AvklaringsbehovReferanse, Oppgave } from './types/types';

export async function fetchProxy<ResponseBody>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  body?: object
): Promise<ResponseBody | undefined> {
  try {
    const res = await fetch(url, {
      method,
      body: body && JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      console.error(data.message);
      return undefined;
    }
  } catch (e) {
    throw new Error('Noe gikk galt.');
  }
}

export async function avregistrerOppgaveFetch(oppgave: Oppgave) {
  const body: AvklaringsbehovReferanse = {
    avklaringsbehovKode: oppgave.avklaringsbehovKode,
    journalpostId: oppgave.journalpostId,
    saksnummer: oppgave.saksnummer,
    referanse: oppgave.behandlingRef,
  };
  return fetchProxy('/api/oppgave/avregistrer', 'POST', body);
}
