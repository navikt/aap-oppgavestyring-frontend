import { NextRequest } from 'next/server';
import { fetchProxy } from 'lib/services/fetchProxy';
import { logError, isLocal } from '@navikt/aap-felles-utils';

const oppgavestyringApiBaseUrl = process.env.OPPGAVESTYRING_API_BASE_URL;
const oppgavestyringApiScope = process.env.OPPGAVESTYRING_API_SCOPE ?? '';

interface Params {
  params: Promise<{ id: string }>;
}

export async function PATCH(req: NextRequest, props: Params) {
  const params = await props.params;
  if (isLocal()) {
    return new Response(JSON.stringify({ message: 'Oppgave frigitt', status: 200 }), { status: 200 });
  }

  const body = await req.json();
  try {
    await fetchProxy(`${oppgavestyringApiBaseUrl}/oppgaver/${params.id}/frigi`, oppgavestyringApiScope, 'PATCH', body);
    return new Response(JSON.stringify({ message: 'Oppgave frigitt', status: 200 }), { status: 200 });
  } catch (error) {
    logError('Feil ved frigjøring av oppgave', error);
    return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
  }
}
