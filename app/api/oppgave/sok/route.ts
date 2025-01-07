import { NextRequest } from 'next/server';
import { logError } from '@navikt/aap-felles-utils';
import { oppgaveSøk } from 'lib/services/oppgaveService/oppgaveService';

export async function POST(req: NextRequest) {
  const data: { søketekst: string } = await req.json().then((data) => ({ søketekst: data.søketekst }));
  if (!data.søketekst) {
    return new Response(JSON.stringify({ message: 'Missing søketekst', status: 400 }), { status: 400 });
  }

  try {
    const result = await oppgaveSøk(data.søketekst);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    logError(`/api/oppgave/sok`, error);
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
