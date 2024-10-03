import { NextRequest } from 'next/server';
import { isLocal, logError } from '@navikt/aap-felles-utils';
import { avreserverOppgave } from '../../../../lib/services/oppgaveService/oppgaveService';
import { AvklaringsbehovReferanse } from '../../../../lib/types/types';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  if (isLocal()) {
    return new Response(JSON.stringify([]));
  }

  try {
    const body: AvklaringsbehovReferanse = await req.json();
    const res = await avreserverOppgave(body);
    revalidateTag('oppgaveservice/mine-oppgaver');
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    logError('Feil ved avreservering av oppgave', error);
    return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
  }
}
