import { AvklaringsbehovReferanse, Oppgave } from '../types/types';

export function buildSaksbehandlingsURL(oppgave: Oppgave | AvklaringsbehovReferanse): string {
  // @ts-ignore
  return `${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sak/${oppgave.saksnummer}/${oppgave?.behandlingRef ?? oppgave?.referanse}`;
}
