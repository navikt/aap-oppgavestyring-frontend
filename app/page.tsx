import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import { hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService/oppgaveService';
import {MineOppgaver} from "../components/mineoppgaver/MineOppgaver";

const Page = async () => {
  const køer = await hentKøer();
  const mineOppgaver = await hentMineOppgaver();
  return <div>
    <VelgOppgaveKø køer={køer} />
    <MineOppgaver oppgaver={mineOppgaver} />
  </div>
};

export default Page;
