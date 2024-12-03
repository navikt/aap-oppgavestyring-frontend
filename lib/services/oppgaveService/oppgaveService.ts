import { fetchProxy, fetchProxyNoRetry } from 'lib/services/fetchProxy';
import { AvklaringsbehovReferanse, Kø, NesteOppgaveResponse, Oppgave } from 'lib/types/types';

const oppgaveApiBaseUrl = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';
function isLocal() {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost';
}

export const hentKøer = async (): Promise<Kø[]> => {
  if (isLocal()) {
    return [
      // @ts-ignore
      { navn: 'Kø en', id: 0, beskrivelse: 'Beskrivelse for kø en' },
      // @ts-ignore
      { navn: 'Kø to', id: 1, beskrivelse: 'Beskrivelse for kø to' },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/filter`;
  return await fetchProxy<Kø[]>(url, oppgaveApiScope, 'GET');
};
export const hentMineOppgaver = async (): Promise<Oppgave[]> => {
  if (isLocal()) {
    return [
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: 'FØRSTEGANGSBEHANDLING',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: 'saksnummer-12',
        status: 'OPPRETTET',
        versjon: 2,
      },
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: 'KLAGE',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: 'saksnummer-12',
        status: 'OPPRETTET',
        versjon: 2,
      },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/mine-oppgaver`;
  return await fetchProxyNoRetry<Oppgave[]>(url, oppgaveApiScope, 'GET', undefined, 'oppgaveservice/mine-oppgaver');
};
export const hentAlleOppgaver = async (): Promise<Oppgave[]> => {
  if (isLocal()) {
    return [
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: 'FØRSTEGANGSBEHANDLING',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: 'saksnummer-12',
        status: 'OPPRETTET',
        versjon: 2,
      },
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: 'KLAGE',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: 'saksnummer-12',
        status: 'OPPRETTET',
        versjon: 2,
      },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/alle-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'GET');
};
export const hentOppgaverForFilter = async (filterId: number): Promise<Oppgave[]> => {
  if (isLocal()) {
    return [
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: `behandlingref-12`,
        behandlingstype: 'FØRSTEGANGSBEHANDLING',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-1`,
        status: 'OPPRETTET',
        versjon: 2,
      },
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: 'KLAGE',
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-2`,
        status: 'OPPRETTET',
        versjon: 2,
      },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/hent-oppgaver`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'POST', { filterId });
};
export const avreserverOppgave = async (avklaringsbehovReferanse: AvklaringsbehovReferanse): Promise<unknown> => {
  const url = `${oppgaveApiBaseUrl}/avreserver-oppgave`;
  return await fetchProxy<unknown>(url, oppgaveApiScope, 'POST', avklaringsbehovReferanse);
};

export const velgNesteOppgave = async (køId: number): Promise<NesteOppgaveResponse> => {
  const url = `${oppgaveApiBaseUrl}/neste-oppgave`;
  return await fetchProxy<NesteOppgaveResponse>(url, oppgaveApiScope, 'POST', { filterId: køId });
};
