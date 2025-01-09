'use client';

import { useState } from 'react';
import { Enhet, Kø, Oppgave, OppgavelisteRequestBody } from 'lib/types/types';
import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import { Kort } from 'components/oppgavebehandling/kort/Kort';
import { OppgaveTabell } from 'components/oppgavetabell/OppgaveTabell';
import useSWR from 'swr';
import { fetchProxy } from 'lib/clientApi';
import { BodyShort, VStack } from '@navikt/ds-react';

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
  const oppgaverValgtKø = useSWR(`api/oppgave/oppgaveliste/${aktivKø}/${aktivEnhet}`, () =>
    fetchKø(aktivKø, aktivEnhet)
  );
  return (
    <Kort>
      <VStack gap={'5'}>
        <VelgOppgaveKø køer={køer} valgtKøListener={setAktivKø} enheter={enheter} valgtEnhetListener={setAktivEnhet} />
        {!oppgaverValgtKø.data?.length && <BodyShort>Ingen oppgaver i valgt kø for valgt enhet</BodyShort>}
        <OppgaveTabell oppgaver={oppgaverValgtKø.data || []} />
      </VStack>
    </Kort>
  );
};
