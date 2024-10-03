import { NextRequest } from 'next/server';
import { velgNesteOppgave } from 'lib/services/oppgaveService/oppgaveService';
import { logError } from '@navikt/aap-felles-utils';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const køId = await req.json().then((data) => data.køId);
  if (!køId) {
    return new Response(JSON.stringify({ message: 'Missing køId', status: 400 }), { status: 400 });
  }

  try {
    const result = await velgNesteOppgave(køId);
    revalidateTag('oppgaveservice/mine-oppgaver');
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/neste`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
