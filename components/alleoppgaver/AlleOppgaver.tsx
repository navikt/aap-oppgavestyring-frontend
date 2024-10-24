'use client';

import { Oppgave } from '../../lib/types/types';
import { Heading, Table } from '@navikt/ds-react';
import { formaterDato } from '../../lib/utils/date';

interface Props {
  oppgaver: Oppgave[];
}
export const AlleOppgaver = ({ oppgaver }: Props) => {
  return (
    <div>
      <Heading size={'medium'} level={'2'} spacing>
        Alle oppgaver
      </Heading>
      <Table size={'small'} zebraStripes>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>SaksID</Table.HeaderCell>
            <Table.HeaderCell>Type behandling</Table.HeaderCell>
            <Table.HeaderCell>Avklaringsbehov</Table.HeaderCell>
            <Table.HeaderCell>Dato opprettet</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map((oppgave, i) => (
            <Table.Row key={`oppgave-${i}`}>
              <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
              <Table.DataCell>{oppgave.behandlingstype}</Table.DataCell>
              <Table.DataCell>{oppgave.avklaringsbehovKode}</Table.DataCell>
              <Table.DataCell>{formaterDato(oppgave.opprettetTidspunkt)}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
