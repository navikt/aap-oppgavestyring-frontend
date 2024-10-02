import { fetchProxy } from 'lib/services/fetchProxy';
import { AvklaringsbehovReferanse, Kø, NesteOppgaveResponse, Oppgave } from 'lib/types/types';

const oppgaveApiBaseUrl = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';

export const hentKøer = async (): Promise<Kø[]> => {
  const url = `${oppgaveApiBaseUrl}/filter`;
  return await fetchProxy<Kø[]>(url, oppgaveApiScope, 'GET');
};
export const hentMineOppgaver = async (): Promise<Oppgave[]> => {
  const url = `${oppgaveApiBaseUrl}/mine-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'GET');
};
export const hentÅpneOppgaver = async (): Promise<Oppgave[]> => {
  const url = `${oppgaveApiBaseUrl}/alle-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'GET');
};
export const avreserverOppgave = async (avklaringsbehovReferanse: AvklaringsbehovReferanse): Promise<unknown> => {
  const url = `${oppgaveApiBaseUrl}/avreserver-oppgave`;
  return await fetchProxy<unknown>(url, oppgaveApiScope, 'POST', avklaringsbehovReferanse);
};

export const velgNesteOppgave = async (køId: number): Promise<NesteOppgaveResponse> => {
  console.log('Behandler neste oppgave', køId);
  const url = `${oppgaveApiBaseUrl}/neste-oppgave`;
  return await fetchProxy<NesteOppgaveResponse>(url, oppgaveApiScope, 'POST', { filterId: køId });
};
