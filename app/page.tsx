import { hentAlleOppgaver, hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService/oppgaveService';
import { VelgOppgaveKø } from '../components/velgoppgavekø/VelgOppgaveKø';
import { MineOppgaver } from '../components/mineoppgaver/MineOppgaver';
import { Kort } from '../components/oppgavebehandling/kort/Kort';
import styles from './page.module.css';
import { AlleOppgaver } from '../components/alleoppgaver/AlleOppgaver';

const Page = async () => {
  const køer = await hentKøer();
  const mineOppgaver = await hentMineOppgaver();
  const alleOppgaver = await hentAlleOppgaver();
  return (
    <div className={styles.container}>
      <Kort>
        <VelgOppgaveKø køer={køer} />
      </Kort>
      <Kort>
        <MineOppgaver oppgaver={mineOppgaver} />
      </Kort>
      <Kort>
        <AlleOppgaver oppgaver={alleOppgaver} />
      </Kort>
    </div>
  );
};

export default Page;
