import { VelgOppgaveKø } from 'components/velgoppgavekø/VelgOppgaveKø';
import { hentKøer } from 'lib/services/oppgaveService/oppgaveService';

const Page = async () => {
  const køer = await hentKøer();
  return <VelgOppgaveKø køer={køer} />;
};

export default Page;
