import { components as oppgave } from '@navikt/aap-oppgave-typescript-types';
import { components as postmottak } from '@navikt/aap-postmottak-backend-typescript-types';
import { components as behandlingsflyt } from '@navikt/aap-behandlingsflyt-typescript-types';

// oppgave
export type NesteOppgaveResponse = oppgave['schemas']['no.nav.aap.oppgave.plukk.NesteOppgaveDto'];
export type Kø = oppgave['schemas']['no.nav.aap.oppgave.filter.FilterDto'];
export type Oppgave = oppgave['schemas']['no.nav.aap.oppgave.OppgaveDto'];
export type AvklaringsbehovReferanse = oppgave['schemas']['no.nav.aap.oppgave.AvklaringsbehovReferanseDto'];
export type Enhet = oppgave['schemas']['no.nav.aap.oppgave.enhet.EnhetDto'];
export type NesteOppgaveRequestBody = oppgave['schemas']['no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto'];
export type OppgavelisteResponse = oppgave['schemas']['no.nav.aap.oppgave.liste.OppgavelisteRespons'];
export type OppgavelisteRequest = oppgave['schemas']['no.nav.aap.oppgave.liste.OppgavelisteRequest'];

// behandlingsflyt
export type BehandlingsFlytAvklaringsbehovKode =
  behandlingsflyt['schemas']['no.nav.aap.behandlingsflyt.kontrakt.avklaringsbehov.Definisjon']['kode'];

// postmottak
export type PostmottakAvklaringsbehovKode =
  postmottak['schemas']['no.nav.aap.postmottak.kontrakt.avklaringsbehov.Definisjon']['kode'];
export type AvklaringsbehovKode = BehandlingsFlytAvklaringsbehovKode | PostmottakAvklaringsbehovKode;
