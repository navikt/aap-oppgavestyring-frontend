import { NextRequest } from 'next/server';
import { hentOppgaverForFilter } from 'lib/services/oppgaveService/oppgaveService';
import { logError } from '@navikt/aap-felles-utils';

export async function POST(req: NextRequest) {
  const køId = await req.json().then((data) => data.filterId);
  if (køId === undefined) {
    return new Response(JSON.stringify({ message: 'Missing køId', status: 400 }), { status: 400 });
  }

  try {
    const result = await hentOppgaverForFilter(køId);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/hent-oppgaver`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
