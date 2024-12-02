'use client';

import { useState } from 'react';
import { Kø, Oppgave } from 'lib/types/types';
import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import { Kort } from 'components/oppgavebehandling/kort/Kort';
import { AlleOppgaver } from 'components/alleoppgaver/AlleOppgaver';
import useSWR from 'swr';
import { fetchProxy } from 'lib/clientApi';
import { VStack } from '@navikt/ds-react';

interface Props {
  køer: Kø[];
}
async function fetchKø(filterId: number) {
  return fetchProxy<Oppgave[]>('/api/oppgave/hent-oppgaver', 'POST', { filterId });
}
export const OppgaveKøMedOppgaver = ({ køer }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  const oppgaverValgtKø = useSWR(`api/oppgave/hent-oppgaver/${aktivKø}`, () => fetchKø(aktivKø));
  return (
    <Kort>
      <VStack gap={'5'}>
        <VelgOppgaveKø køer={køer} valgtKøListener={setAktivKø} />
        <AlleOppgaver oppgaver={oppgaverValgtKø.data || []} />
      </VStack>
    </Kort>
  );
};
