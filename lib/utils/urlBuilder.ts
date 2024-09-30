import {Oppgave} from "../types/types";

export function buildSaksbehandlingsURL(oppgave: Oppgave): string {
   return `${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sak/${oppgave.saksnummer}/${oppgave.behandlingRef}`
}