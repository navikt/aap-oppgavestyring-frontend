'use client';
import { BodyShort, Button, Heading, Label, Select } from '@navikt/ds-react';

import styles from './VelgOppgaveKø.module.css';

export const VelgOppgaveKø = () => {
  // TODO: Be om neste oppgave fra backend
  return (
    <div>
      <Heading level="2" size="medium" spacing>
        Oppgavekø
      </Heading>
      <div className={styles.container}>
        <div className={styles.column}>
          <Select label="Velg oppgavekø" size="small" description="Du jobber på følgende kø">
            <option value="standard">Standard AAP oppgavekø (Eldst først)</option>
          </Select>

          <div>
            <Button size="small" onClick={() => window.alert('Neste oppgave!')}>
              Behadle neste sak
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
