import { hentKøer, hentMineOppgaver } from 'lib/services/oppgaveService/oppgaveService';
import { MineOppgaver } from '../components/mineoppgaver/MineOppgaver';
import { Kort } from '../components/oppgavebehandling/kort/Kort';
import styles from './page.module.css';
import { OppgaveKøMedOppgaver } from 'components/oppgavekømedoppgaver/OppgaveKøMedOppgaver';

const Page = async () => {
  const køer = await hentKøer();
  const mineOppgaver = await hentMineOppgaver();
  return (
    <div className={styles.container}>
      <OppgaveKøMedOppgaver køer={køer} />
      <Kort>
        <MineOppgaver oppgaver={mineOppgaver || []} />
      </Kort>
    </div>
  );
};

export default Page;
