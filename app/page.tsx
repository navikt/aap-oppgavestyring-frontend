import { hentMineOppgaver } from 'lib/services/oppgaveService/oppgaveService';
import { MineOppgaver } from 'components/mineoppgaver/MineOppgaver';
import { Kort } from 'components/oppgavebehandling/kort/Kort';
import styles from './page.module.css';

const Page = async () => {
  const mineOppgaver = await hentMineOppgaver();
  return (
    <div className={styles.container}>
      <Kort>
        <MineOppgaver oppgaver={mineOppgaver.oppgaver || []} />
      </Kort>
    </div>
  );
};

export default Page;
