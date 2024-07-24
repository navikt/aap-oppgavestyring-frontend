'use client';

import { BrukerInformasjon } from '@navikt/aap-felles-utils';
import { Dropdown, InternalHeader, Link } from 'components/DsClient';

import styles from 'components/appheader/AppHeader.module.css';

const Brukermeny = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <Dropdown>
    <InternalHeader.UserButton name={brukerInformasjon.navn} as={Dropdown.Toggle} />
    <Dropdown.Menu>
      <Dropdown.Menu.List>
        <Dropdown.Menu.List.Item>
          <Link href={'/oauth2/logout'} className={styles.link}>
            Logg ut
          </Link>
        </Dropdown.Menu.List.Item>
      </Dropdown.Menu.List>
    </Dropdown.Menu>
  </Dropdown>
);

const AppHeader = ({ brukerInformasjon }: { brukerInformasjon: BrukerInformasjon }) => (
  <InternalHeader className={styles.header}>
    <div className={styles.leftSide}>
      <InternalHeader.Title href="/">Kelvin</InternalHeader.Title>
      <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/sanity`}>Sanity</Link>
      <Link href={`${process.env.NEXT_PUBLIC_SAKSBEHANDLING_URL}/saksoversikt`}>Saksoversikt</Link>
      <Link href={'/oppgaveliste'}>Oppgaveliste</Link>
    </div>

    <Brukermeny brukerInformasjon={brukerInformasjon} />
  </InternalHeader>
);

export { AppHeader };
