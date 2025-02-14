import '@navikt/ds-css';
import '@navikt/aap-felles-css';
import 'styles/globals.css';

import { hentBrukerInformasjon, verifyUserLoggedIn } from '@navikt/aap-felles-utils';

import styles from './layout.module.css';
import { KelvinAppHeader } from '@navikt/aap-felles-react/cjs/KelvinAppHeader/KelvinAppHeader';

export const metadata = {
  title: 'Kelvin',
  description: 'Saksbehandlingssystem for AAP',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await verifyUserLoggedIn();
  const brukerInformasjon = await hentBrukerInformasjon();

  return (
    <html lang="nb">
      <body className={styles.body}>
        <KelvinAppHeader brukerInformasjon={brukerInformasjon} />
        <div className={styles.flexContainer}>
          <div className={styles.bodyContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}
