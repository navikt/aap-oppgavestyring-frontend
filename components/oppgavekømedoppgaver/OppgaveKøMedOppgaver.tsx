'use client';

import { useState } from 'react';
import { Enhet, Kø, Oppgave, OppgavelisteRequestBody } from 'lib/types/types';
import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import { Kort } from 'components/oppgavebehandling/kort/Kort';
import { OppgaveTabell } from 'components/oppgavetabell/OppgaveTabell';
import useSWR from 'swr';
import { fetchProxy } from 'lib/clientApi';
import { BodyShort, HStack, Label, UNSAFE_Combobox, VStack } from '@navikt/ds-react';
import { BehandlingstypeOptionLabel, behandlingsTyperOptions } from 'lib/utils/behandlingstyper';
import { avklaringsbehovKodeOgLabel } from 'lib/utils/avklaringsbehov';
import { ComboboxOption } from '@navikt/ds-react/esm/form/combobox/types';

interface Props {
  køer: Kø[];
  enheter: Enhet[];
}

async function fetchKø(filterId: number, enhet: string) {
  const payload: OppgavelisteRequestBody = { filterId, enheter: [enhet] };
  return fetchProxy<Oppgave[]>('/api/oppgave/oppgaveliste', 'POST', payload);
}

export const OppgaveKøMedOppgaver = ({ køer, enheter }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const [aktivEnhet, setAktivEnhet] = useState<string>(enheter[0]?.enhetNr ?? '');
  const [selectedBehandlingstype, setSelectedBehandlingstype] = useState<BehandlingstypeOptionLabel[]>([]);
  const [selectedAvklaringsbehov, setSelectedAvklaringsbehov] = useState<ComboboxOption[]>([]);

  async function onToggleSelectedBehandlingstype(option: string, isSelected: boolean) {
    if (isSelected) {
      const newSelected = [...selectedBehandlingstype, option as BehandlingstypeOptionLabel];
      setSelectedBehandlingstype(newSelected);
    } else {
      const newSelected = selectedBehandlingstype.filter((o) => o !== option);
      setSelectedBehandlingstype(newSelected);
    }
  }
  async function onToggleSelectedAvklaringsbehov(option: string, isSelected: boolean) {
    if (isSelected) {
      const fullOption = avklaringsbehovKodeOgLabel.find((e) => e.value === option);
      if (fullOption) {
        const newSelected = [...selectedAvklaringsbehov, fullOption];
        setSelectedAvklaringsbehov(newSelected);
      }
    } else {
      const newSelected = selectedAvklaringsbehov.filter((o) => o.value !== option);
      setSelectedAvklaringsbehov(newSelected);
    }
  }
  const oppgaverValgtKø = useSWR(`api/oppgave/oppgaveliste/${aktivKø}/${aktivEnhet}`, () =>
    fetchKø(aktivKø, aktivEnhet)
  );
  return (
    <Kort>
      <VStack gap={'5'}>
        <VelgOppgaveKø køer={køer} valgtKøListener={setAktivKø} enheter={enheter} valgtEnhetListener={setAktivEnhet} />
        {!oppgaverValgtKø.data?.length && <BodyShort>Ingen oppgaver i valgt kø for valgt enhet</BodyShort>}
        <VStack gap={'5'}>
          <Label>Filtere</Label>
          <HStack gap={'3'} wrap>
            <UNSAFE_Combobox
              label={'Type behandling'}
              options={behandlingsTyperOptions}
              size={'small'}
              isMultiSelect
              onToggleSelected={onToggleSelectedBehandlingstype}
              selectedOptions={selectedBehandlingstype}
            />
            <UNSAFE_Combobox
              label={'Avklaringsbehov'}
              options={avklaringsbehovKodeOgLabel}
              size={'small'}
              isMultiSelect
              onToggleSelected={onToggleSelectedAvklaringsbehov}
              selectedOptions={selectedAvklaringsbehov}
            />
          </HStack>
        </VStack>
        <OppgaveTabell oppgaver={oppgaverValgtKø.data || []} />
      </VStack>
    </Kort>
  );
};
