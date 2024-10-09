import { hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService/oppgaveService';
import { VelgOppgaveKø } from '../components/velgoppgavekø/VelgOppgaveKø';
import { MineOppgaver } from '../components/mineoppgaver/MineOppgaver';
import { Kort } from '../components/oppgavebehandling/kort/Kort';
import styles from './page.module.css';

const Page = async () => {
  const køer = await hentKøer();
  const mineOppgaver = await hentMineOppgaver();
  return (
    <div className={styles.container}>
      <Kort>
        <VelgOppgaveKø køer={køer} />
      </Kort>
      <Kort>
        <MineOppgaver oppgaver={mineOppgaver} />
      </Kort>
    </div>
  );
};

export default Page;
