'use client';
import { BodyShort, Button, Heading, Label, Select } from '@navikt/ds-react';

import styles from './VelgOppgaveKø.module.css';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { Kø, NesteOppgaveResponse } from 'lib/types/types';
import { fetchProxy } from 'lib/clientApi';
import { buildSaksbehandlingsURL } from '../../lib/utils/urlBuilder';

interface Props {
  køer: Kø[];
  valgtKøListener?: Dispatch<SetStateAction<number>>;
}

export const VelgOppgaveKø = ({ køer, valgtKøListener }: Props) => {
  const [aktivKø, setAktivKø] = useState<number>(køer[0]?.id ?? 0);
  async function plukkOgGåTilOppgave() {
    const nesteOppgave = await fetchProxy<NesteOppgaveResponse>('/api/oppgave/neste', 'POST', { køId: aktivKø });
    if (nesteOppgave) {
      window.location.assign(buildSaksbehandlingsURL(nesteOppgave.avklaringsbehovReferanse));
    }
  }
  const aktivKøBeskrivelse = useMemo(() => køer.find((e) => e.id === aktivKø)?.beskrivelse, [aktivKø]);
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
            onChange={(event) => {
              const køId = parseInt(event.target.value);
              setAktivKø(køId);
              valgtKøListener && valgtKøListener(køId);
            }}
          >
            {køer.map((kø) => {
              if (kø) {
                return (
                  <option key={kø.id} value={`${kø.id}`}>
                    {kø.navn}
                  </option>
                );
              }
            })}
          </Select>

          <div>
            <Button size="small" onClick={() => plukkOgGåTilOppgave()}>
              Behandle neste oppgave
            </Button>
          </div>
        </div>
        <div className={styles.column}>
          <Label as="p" spacing>
            Beskrivelse av køen
          </Label>
          <BodyShort spacing>{aktivKøBeskrivelse}</BodyShort>
        </div>
      </div>
    </div>
  );
};
