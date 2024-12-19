import { fetchProxy, fetchProxyNoRetry } from 'lib/services/fetchProxy';
import {
  AvklaringsbehovReferanse,
  Enhet,
  Kø,
  NesteOppgaveRequestBody,
  NesteOppgaveResponse,
  Oppgave,
  OppgavelisteRequestBody,
} from 'lib/types/types';
import {
  NoNavAapOppgaveOppgaveDtoBehandlingstype,
  NoNavAapOppgaveOppgaveDtoStatus,
} from '@navikt/aap-oppgave-typescript-types';

const oppgaveApiBaseUrl = process.env.OPPGAVE_API_BASE_URL;
const oppgaveApiScope = process.env.OPPGAVE_API_SCOPE ?? '';
function isLocal() {
  return process.env.NEXT_PUBLIC_ENVIRONMENT === 'localhost';
}
const oppgaveMock = [
  {
    opprettetAv: 'tor',
    avklaringsbehovKode: '5003',
    behandlingOpprettet: '09-12-2024',
    behandlingRef: `behandlingref-12`,
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.F_RSTEGANGSBEHANDLING,
    endretTidspunkt: '10-12-2024',
    id: 0,
    opprettetTidspunkt: '09-12-2024',
    saksnummer: `sak-234`,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 2,
    enhet: 'HKLP',
  },
  {
    opprettetAv: 'tor',
    avklaringsbehovKode: '5003',
    behandlingOpprettet: '09-12-2024',
    behandlingRef: 'behandlingref-12',
    behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.KLAGE,
    endretTidspunkt: '10-12-2024',
    id: 0,
    opprettetTidspunkt: '09-12-2024',
    saksnummer: `sak-123`,
    status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
    versjon: 2,
    enhet: 'HFII',
  },
];
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
    return oppgaveMock;
  }
  const url = `${oppgaveApiBaseUrl}/mine-oppgaver`;
  return await fetchProxyNoRetry<Oppgave[]>(url, oppgaveApiScope, 'GET', undefined, 'oppgaveservice/mine-oppgaver');
};
export const hentOppgaveliste = async ({ filterId, enheter }: OppgavelisteRequestBody): Promise<Oppgave[]> => {
  if (isLocal()) {
    return [
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: `behandlingref-12`,
        behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.F_RSTEGANGSBEHANDLING,
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-1`,
        status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
        versjon: 2,
        enhet: 'HKLP',
      },
      {
        opprettetAv: 'tor',
        avklaringsbehovKode: '5003',
        behandlingOpprettet: '09-12-2024',
        behandlingRef: 'behandlingref-12',
        behandlingstype: NoNavAapOppgaveOppgaveDtoBehandlingstype.KLAGE,
        endretTidspunkt: '10-12-2024',
        id: 0,
        opprettetTidspunkt: '09-12-2024',
        saksnummer: `sak-fra-kø-${filterId}-2`,
        status: NoNavAapOppgaveOppgaveDtoStatus.OPPRETTET,
        versjon: 2,
        enhet: 'HFII',
      },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/oppgaveliste`;
  return await fetchProxy<Oppgave[]>(url, oppgaveApiScope, 'POST', { filterId, enheter });
};
export const avreserverOppgave = async (avklaringsbehovReferanse: AvklaringsbehovReferanse): Promise<unknown> => {
  const url = `${oppgaveApiBaseUrl}/avreserver-oppgave`;
  return await fetchProxy<unknown>(url, oppgaveApiScope, 'POST', avklaringsbehovReferanse);
};

export const velgNesteOppgave = async ({
  filterId,
  enheter,
}: NesteOppgaveRequestBody): Promise<NesteOppgaveResponse> => {
  const url = `${oppgaveApiBaseUrl}/neste-oppgave`;
  return await fetchProxy<NesteOppgaveResponse>(url, oppgaveApiScope, 'POST', { filterId, enheter });
};

export async function hentEnheter() {
  if (isLocal()) {
    return [
      { enhetNr: 'FKSH', navn: 'Enhet en' },
      { enhetNr: 'AHFG', navn: 'Enhet to' },
      { enhetNr: 'HDMM', navn: 'Enhet tre' },
    ];
  }
  const url = `${oppgaveApiBaseUrl}/enheter`;
  return await fetchProxy<Array<Enhet>>(url, oppgaveApiScope, 'POST');
}
