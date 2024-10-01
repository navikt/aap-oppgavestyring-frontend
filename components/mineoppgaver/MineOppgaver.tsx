'use client'

import {Oppgave} from "../../lib/types/types";
import {Button, Heading, Table} from "@navikt/ds-react";
import {useState} from "react";
import {fetchProxy} from "../../lib/clientApi";

interface Props {
    oppgaver: Oppgave[];
}
export const MineOppgaver = ({oppgaver}: Props) => {
    const [loadingID, setLoadingID] = useState<number | null>(null);
    async function frigiOppgave(id: number) {
        setLoadingID(id);
            await fetchProxy(`/api/oppgave/${id}/avreserver`, 'POST')
        setLoadingID(null);
    }
    return (
        <div>
            <Heading size={'medium'} level={'2'} spacing>Mine oppgaver(NB: Under arbeid, trenger ikke testes)</Heading>
            <Table>
                <Table.Header>
                    <Table.HeaderCell>Saksnummer</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Header>
                {oppgaver.map((oppgave, i) => <Table.Row key={`oppgave-${i}`}>
                    <Table.DataCell>{`${oppgave.saksnummer}`}</Table.DataCell>
                    <Table.DataCell>
                        <Button
                          type={'button'}
                          size={'small'}
                          loading={oppgave.id && loadingID === oppgave.id.id}
                          onClick={() => oppgave.id ? frigiOppgave(oppgave.id.id) : null}
                        >Frigi</Button>
                    </Table.DataCell>
                </Table.Row>)}
            </Table>
        </div>
    )
}