import { exhaustiveCheck } from 'lib/utils/typescript';
import { NoNavAapOppgaveFilterFilterDtoBehandlingstyper } from '@navikt/aap-oppgave-typescript-types';

const behandlingsTypeAlternativerFraEnum = Object.keys(
  NoNavAapOppgaveFilterFilterDtoBehandlingstyper as unknown as keyof (typeof NoNavAapOppgaveFilterFilterDtoBehandlingstyper)[]
)
  .map((key) => key as keyof typeof NoNavAapOppgaveFilterFilterDtoBehandlingstyper)
  .map((key) => {
    switch (key) {
      case 'F_RSTEGANGSBEHANDLING':
        return 'Førstegangsbehandling';
      case 'TILBAKEKREVING':
        return 'Tilbakekreving';
      case 'REVURDERING':
        return 'Revurdering';
      case 'KLAGE':
        return 'Klage';
      case 'DOKUMENT_H_NDTERING':
        return 'Dokumenthåndtering';
      case 'JOURNALF_RING':
        return 'Journalføring';
    }
    exhaustiveCheck(key);
  });
export type BehandlingstypeOptionLabel = (typeof behandlingsTypeAlternativerFraEnum)[number];
export const behandlingsTyperOptions: BehandlingstypeOptionLabel[] = behandlingsTypeAlternativerFraEnum;
export type BehandlingstypeFilter = `${NoNavAapOppgaveFilterFilterDtoBehandlingstyper}`;

export function mapBehandlingstypeOptionLabelTilBehandlingstypeFilter(
  label: BehandlingstypeOptionLabel
): BehandlingstypeFilter {
  switch (label) {
    case 'Klage':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.KLAGE;
    case 'Førstegangsbehandling':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.F_RSTEGANGSBEHANDLING;
    case 'Tilbakekreving':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.TILBAKEKREVING;
    case 'Revurdering':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.REVURDERING;
    case 'Dokumenthåndtering':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.DOKUMENT_H_NDTERING;
    case 'Journalføring':
      return NoNavAapOppgaveFilterFilterDtoBehandlingstyper.JOURNALF_RING;
  }
  exhaustiveCheck(label);
}
