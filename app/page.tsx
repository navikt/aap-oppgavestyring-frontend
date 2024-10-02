import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import {hentKøer, hentMineOppgaver, hentÅpneOppgaver} from 'lib/services/oppgaveService/oppgaveService';
import {MineOppgaver} from "../components/mineoppgaver/MineOppgaver";
import {ÅpneOppgaver} from "../components/åpneoppgaver/ÅpneOppgaver";

const Page = async () => {
  const køer = await hentKøer();
  const mineOppgaver = await hentMineOppgaver();
  const åpneOppgaver = await hentÅpneOppgaver();
  return <div>
    <VelgOppgaveKø køer={køer} />
    <MineOppgaver oppgaver={mineOppgaver} />
    <ÅpneOppgaver oppgaver={åpneOppgaver} />
  </div>
};

export default Page;
