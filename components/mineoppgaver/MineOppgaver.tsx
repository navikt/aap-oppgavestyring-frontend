'use client';

import { Oppgave } from '../../lib/types/types';
import { Button, Dropdown, Heading, HStack, Loader, Table } from '@navikt/ds-react';
import { useState } from 'react';
import { avregistrerOppgaveFetch } from '../../lib/clientApi';
import { buildSaksbehandlingsURL } from '../../lib/utils/urlBuilder';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import { formaterDato } from '../../lib/utils/date';

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
        Mine oppgaver
      </Heading>
      <Table size={'small'} zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SaksID</Table.HeaderCell>
            <Table.HeaderCell>Type behandling</Table.HeaderCell>
            <Table.HeaderCell>Avklaringsbehov</Table.HeaderCell>
            <Table.HeaderCell>Dato opprettet</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map((oppgave, i) => (
            <Table.Row key={`oppgave-${i}`}>
              <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
              <Table.DataCell>{oppgave.behandlingstype}</Table.DataCell>
              <Table.DataCell>{oppgave.avklaringsbehovKode}</Table.DataCell>
              <Table.DataCell>{formaterDato(oppgave.opprettetTidspunkt)}</Table.DataCell>
              <Table.DataCell>
                <HStack gap={'1'}>
                  <Button type={'button'} size={'small'} onClick={() => redirectTilOppgave(oppgave)}>
                    Behandle
                  </Button>
                  <Dropdown>
                    <Button as={Dropdown.Toggle} size="small" variant="primary">
                      <ChevronDownIcon title="Meny" />
                    </Button>
                    <Dropdown.Menu>
                      <Dropdown.Menu.GroupedList>
                        <Dropdown.Menu.GroupedList.Item onClick={() => frigiOppgave(oppgave)}>
                          Frigi oppgave
                          {loadingID === oppgave.id && <Loader />}
                        </Dropdown.Menu.GroupedList.Item>
                      </Dropdown.Menu.GroupedList>
                    </Dropdown.Menu>
                  </Dropdown>
                </HStack>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
