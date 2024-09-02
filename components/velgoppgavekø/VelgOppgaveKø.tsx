'use client';
import { BodyShort, Button, Heading, Select } from '@navikt/ds-react';

export const VelgOppgaveKø = () => {
  // TODO: Be om neste oppgave fra backend
  return (
    <div>
      <Heading level="2" size="medium">
        Oppgavekøer
      </Heading>
      <Select label="Velg oppgavekø" size="small">
        <option value="standard">Standard kø (Eldst først)</option>
      </Select>
      <BodyShort size="small" spacing>
        Antall i kø: Over 9000
      </BodyShort>
      <Button size="small" onClick={() => window.alert('Neste oppgave!')}>
        Gi meg neste oppgave i køen
      </Button>
    </div>
  );
};
