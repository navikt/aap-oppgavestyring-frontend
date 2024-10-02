'use client';

import { Heading, Table } from '@navikt/ds-react';
import { Oppgave } from '../../lib/types/types';

interface Props {
  oppgaver: Oppgave[];
}

export const ÅpneOppgaver = ({ oppgaver }: Props) => {
  return (
    <div>
      <Heading level={'2'} size={'medium'}>
        Mine oppgaver(NB: Under arbeid, trenger ikke testes)
      </Heading>
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
    </div>
  );
};
