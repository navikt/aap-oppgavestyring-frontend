import { fetchProxy } from 'lib/services/fetchProxy';
import { Kø, NesteOppgaveResponse } from 'lib/types/types';

const oppgaveApiBaseUrl = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';

export const hentKøer = async (): Promise<Kø[]> => {
  const url = `${oppgaveApiBaseUrl}/filter`;
  return await fetchProxy<Kø[]>(url, oppgaveApiScope, 'GET');
};

export const velgNesteOppgave = async (køId: number): Promise<NesteOppgaveResponse> => {
  console.log('Behandler neste oppgave', køId);
  const url = `${oppgaveApiBaseUrl}/neste-oppgave`;
  return await fetchProxy<NesteOppgaveResponse>(url, oppgaveApiScope, 'POST', { filterId: køId });
};
