'use client';

import { Search } from '@navikt/ds-react';
import { useState } from 'react';
import styles from './Oppgavesøk.module.css';
import { AvklaringsbehovKode, mapBehovskodeTilBehovstype, Oppgave } from 'lib/types/types';
import { buildSaksbehandlingsURL } from 'lib/utils/urlBuilder';

export const Oppgavesøk = () => {
  const [oppgaver, setOppgaver] = useState<Oppgave[]>([]);
  async function utførSøk(søketekst: string) {
    const søkeresultat: Oppgave[] = await fetch(`${process.env.NEXT_PUBLIC_OPPGAVESTYRING_URL}/api/oppgave/sok`, {
      method: 'POST',
      body: JSON.stringify({ søketekst }),
    }).then((res) => res.json());
    setOppgaver(søkeresultat);
  }
  return (
    <form
      data-theme={'dark'}
      className={styles.form}
      role={'search'}
      onSubmit={(e) => {
        const input = e.currentTarget.elements?.[0] as HTMLInputElement;
        if (input.value) {
          utførSøk(input.value);
        }
        e.preventDefault();
      }}
    >
      <Search label={'Søk etter person eller sak'} variant="secondary" hideLabel={true} size={'small'} />

      {oppgaver.length !== 0 && (
        <ul className={styles.resultat}>
          {oppgaver.map((oppgave) => (
            <li key={oppgave.id}>
              <a
                href={`${buildSaksbehandlingsURL(oppgave)}`}
              >{`${oppgave.behandlingstype} - ${mapBehovskodeTilBehovstype(oppgave.avklaringsbehovKode as AvklaringsbehovKode)}`}</a>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
