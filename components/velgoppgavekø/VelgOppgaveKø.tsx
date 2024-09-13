'use client';
import { BodyShort, Button, Heading, Label, Select } from '@navikt/ds-react';

import styles from './VelgOppgaveKø.module.css';
import { useState } from 'react';
import { Kø } from 'lib/types/types';
import { fetchProxy } from 'lib/clientApi';

interface Props {
  køer: Kø[];
}

export const VelgOppgaveKø = ({ køer }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);

  return (
    <div>
      <Heading level="2" size="medium" spacing>
        Oppgavekø
      </Heading>
      <div className={styles.container}>
        <div className={styles.column}>
          <Select
            label="Velg oppgavekø"
            size="small"
            description="Du jobber på følgende kø"
            value={aktivKø}
            onChange={(event) => setAktivKø(parseInt(event.target.value))}
          >
            {køer.map((kø) => (
              <option key={kø.id} value={kø.id}>
                {kø.navn}
              </option>
            ))}
          </Select>

          <div>
            <Button size="small" onClick={() => fetchProxy('/api/oppgave/neste', 'POST', { køId: aktivKø })}>
              Behandle neste sak
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <Label as="p" spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort spacing>
            Standard kø. Alle AAP-oppgaver, med unntak av skjermede personer og internt ansatte.
          </BodyShort>
        </div>
      </div>
    </div>
  );
};
