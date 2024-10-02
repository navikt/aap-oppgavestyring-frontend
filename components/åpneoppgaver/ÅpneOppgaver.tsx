'use client';

import { Table } from '@navikt/ds-react';
import { Oppgave } from '../../lib/types/types';

interface Props {
  oppgaver: Oppgave[];
}

export const ÅpneOppgaver = ({ oppgaver }: Props) => {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Saksnummer</Table.HeaderCell>
      </Table.Header>
      {oppgaver.map((oppgave) => (
        <Table.Row key={`${oppgave.id}`}>
          <Table.DataCell>{oppgave.saksnummer}</Table.DataCell>
        </Table.Row>
      ))}
    </Table>
  );
};
