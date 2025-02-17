import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { hentOppgaveliste } from 'lib/services/oppgaveService/oppgaveService';
import { OppgavelisteRequest } from 'lib/types/types';

export async function POST(req: NextRequest) {
  const data: Partial<OppgavelisteRequest> = await req
    .json()
    .then((data) => ({ filterId: data.filterId, enheter: data.enheter }));
  if (data.filterId === undefined || data.enheter === undefined) {
    return new Response(JSON.stringify({ message: 'Missing filterid or enheter', status: 400 }), { status: 400 });
  }

  try {
    const result = await hentOppgaveliste(data.filterId, data.enheter);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/hent-oppgaver`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
