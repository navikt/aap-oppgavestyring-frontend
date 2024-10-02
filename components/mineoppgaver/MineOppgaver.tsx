'use client';

import { Oppgave } from '../../lib/types/types';
import { Button, Heading, Table } from '@navikt/ds-react';
import { useState } from 'react';
import { avregistrerOppgaveFetch } from '../../lib/clientApi';
import { buildSaksbehandlingsURL } from '../../lib/utils/urlBuilder';

interface Props {
  oppgaver: Oppgave[];
}
export const MineOppgaver = ({ oppgaver }: Props) => {
  const [loadingID, setLoadingID] = useState<number | null>(null);
  async function frigiOppgave(oppgave: Oppgave) {
    if (oppgave.id) setLoadingID(oppgave.id);
    try {
      await avregistrerOppgaveFetch(oppgave);
    } catch (err) {
      setLoadingID(null);
    }
    setLoadingID(null);
  }
  function redirectTilOppgave(oppgave: Oppgave) {
    if (oppgave) {
      window.location.assign(buildSaksbehandlingsURL(oppgave));
    }
  }
  return (
    <div>
      <Heading size={'medium'} level={'2'} spacing>
        Mine oppgaver(NB: Under arbeid, trenger ikke testes)
      </Heading>
      <Table>
        <Table.Header>
          <Table.HeaderCell>Saksnummer</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Header>
        {oppgaver.map((oppgave, i) => (
          <Table.Row key={`oppgave-${i}`}>
            <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
            <Table.DataCell>
              <Button type={'button'} size={'small'} onClick={() => redirectTilOppgave(oppgave)}>
                Løs
              </Button>
            </Table.DataCell>
            <Table.DataCell>
              <Button
                type={'button'}
                size={'small'}
                variant={'secondary'}
                loading={loadingID === oppgave.id}
                onClick={() => frigiOppgave(oppgave)}
              >
                Frigi
              </Button>
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table>
    </div>
  );
};
