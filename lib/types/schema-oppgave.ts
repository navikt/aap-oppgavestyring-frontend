/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/oppdater-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.hendelse.BehandlingFlytStoppetHendelse"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oppdater-postmottak-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.postmottak.kontrakt.hendelse.DokumentflytStoppetHendelse"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/neste-oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.plukk.NesteOppgaveDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/plukk-oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.plukk.PlukkOppgaveDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/avreserver-oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.AvklaringsbehovReferanseDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveId"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flytt-oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.FlyttOppgaveDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveId"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/hent-oppgave": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.AvklaringsbehovReferanseDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/hent-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.filter.FilterId"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveDto"][];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/mine-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/alle-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.OppgaveDto"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/filter": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.filter.FilterDto"][];
                    };
                };
            };
        };
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.filter.FilterDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["no.nav.aap.oppgave.filter.FilterDto"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/filter/{filterId}/slett": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.filter.FilterId"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/produksjonsstyring/antall-oppgaver": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: {
                content: {
                    "application/json": components["schemas"]["no.nav.aap.oppgave.produksjonsstyring.AntallOppgaverDto"];
                };
            };
            responses: {
                /** @description OK */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            [key: string]: number;
                        };
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        "no.nav.aap.behandlingsflyt.kontrakt.behandling.BehandlingReferanse": {
            /** Format: uuid */
            referanse: string;
        };
        "no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto": {
            definisjon: components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO"];
            endringer: components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.behandlingsflyt.kontrakt.hendelse.BehandlingFlytStoppetHendelse": {
            avklaringsbehov: components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.hendelse.AvklaringsbehovHendelseDto"][];
            /** @enum {string} */
            behandlingType: "Førstegangsbehandling" | "Revurdering" | "Tilbakekreving" | "Klage";
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            hendelsesTidspunkt: string;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            opprettetTidspunkt: string;
            personIdent: string;
            referanse: components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.behandling.BehandlingReferanse"];
            saksnummer: components["schemas"]["no.nav.aap.behandlingsflyt.kontrakt.sak.Saksnummer"];
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "IVERKSETTES" | "AVSLUTTET";
            versjon: string;
        };
        "no.nav.aap.behandlingsflyt.kontrakt.hendelse.DefinisjonDTO": {
            /** @enum {string} */
            behovType: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            /** @enum {string} */
            "l\u00F8sesISteg": "START_BEHANDLING" | "VURDER_ALDER" | "VURDER_LOVVALG" | "VURDER_MEDLEMSKAP" | "AVKLAR_STUDENT" | "VURDER_BISTANDSBEHOV" | "VURDER_SYKEPENGEERSTATNING" | "FASTSETT_SYKDOMSVILKÅRET" | "VURDER_YRKESSKADE" | "FRITAK_MELDEPLIKT" | "KVALITETSSIKRING" | "BARNETILLEGG" | "AVKLAR_SYKDOM" | "FASTSETT_ARBEIDSEVNE" | "FASTSETT_BEREGNINGSTIDSPUNKT" | "FASTSETT_GRUNNLAG" | "VIS_GRUNNLAG" | "FASTSETT_UTTAK" | "SAMORDNING_GRADERING" | "DU_ER_ET_ANNET_STED" | "BEREGN_TILKJENT_YTELSE" | "SIMULERING" | "FORESLÅ_VEDTAK" | "FATTE_VEDTAK" | "BREV" | "IVERKSETT_VEDTAK" | "UDEFINERT";
            /** @enum {string} */
            type: "9001" | "9002" | "9003" | "5001" | "5003" | "5004" | "5005" | "5006" | "5007" | "5008" | "5009" | "5010" | "5011" | "5012" | "5013" | "5014" | "5097" | "5098" | "5099" | "5050";
        };
        "no.nav.aap.behandlingsflyt.kontrakt.hendelse.EndringDTO": {
            endretAv: string;
            /**
             * Format: date
             * @example 2024-12-03
             */
            frist?: string | null;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "TOTRINNS_VURDERT" | "SENDT_TILBAKE_FRA_BESLUTTER" | "KVALITETSSIKRET" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            tidsstempel: string;
            /** @enum {string|null} */
            "\u00E5rsakTilSattP\u00E5Vent"?: "VENTER_PÅ_OPPLYSNINGER" | "VENTER_PÅ_OPPLYSNINGER_FRA_UTENLANDSKE_MYNDIGHETER" | "VENTER_PÅ_MEDISINSKE_OPPLYSNINGER" | "VENTER_PÅ_VURDERING_AV_ROL" | "VENTER_PÅ_SVAR_FRA_BRUKER" | "VENTER_PÅ_MASKINELL_AVKLARING" | null;
        };
        "no.nav.aap.behandlingsflyt.kontrakt.sak.Saksnummer": Record<string, never>;
        "no.nav.aap.oppgave.AvklaringsbehovReferanseDto": {
            avklaringsbehovKode: string;
            /** Format: int64 */
            journalpostId?: number | null;
            /** Format: uuid */
            referanse?: string | null;
            saksnummer?: string | null;
        };
        "no.nav.aap.oppgave.FlyttOppgaveDto": {
            avklaringsbehovReferanse: components["schemas"]["no.nav.aap.oppgave.AvklaringsbehovReferanseDto"];
            flyttTilIdent: string;
        };
        "no.nav.aap.oppgave.OppgaveDto": {
            avklaringsbehovKode: string;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            behandlingOpprettet: string;
            /** Format: uuid */
            behandlingRef?: string | null;
            /** @enum {string} */
            behandlingstype: "FØRSTEGANGSBEHANDLING" | "REVURDERING" | "TILBAKEKREVING" | "KLAGE" | "DOKUMENT_HÅNDTERING" | "JOURNALFØRING";
            endretAv?: string | null;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            endretTidspunkt?: string | null;
            /** Format: int64 */
            id?: number | null;
            /** Format: int64 */
            journalpostId?: number | null;
            opprettetAv: string;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            opprettetTidspunkt: string;
            personIdent?: string | null;
            reservertAv?: string | null;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            reservertTidspunkt?: string | null;
            saksnummer?: string | null;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET";
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.oppgave.OppgaveId": {
            /** Format: int64 */
            id: number;
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.oppgave.filter.FilterDto": {
            avklaringsbehovKoder: string[];
            behandlingstyper: ("FØRSTEGANGSBEHANDLING" | "REVURDERING" | "TILBAKEKREVING" | "KLAGE" | "DOKUMENT_HÅNDTERING" | "JOURNALFØRING")[];
            beskrivelse: string;
            endretAv?: string | null;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            endretTidspunkt?: string | null;
            /** Format: int64 */
            id?: number | null;
            navn: string;
            opprettetAv: string;
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            opprettetTidspunkt: string;
        };
        "no.nav.aap.oppgave.filter.FilterId": {
            /** Format: int64 */
            filterId: number;
        };
        "no.nav.aap.oppgave.plukk.FinnNesteOppgaveDto": {
            /** Format: int64 */
            filterId: number;
        };
        "no.nav.aap.oppgave.plukk.NesteOppgaveDto": {
            avklaringsbehovReferanse: components["schemas"]["no.nav.aap.oppgave.AvklaringsbehovReferanseDto"];
            /** Format: int64 */
            oppgaveId: number;
            /** Format: int64 */
            oppgaveVersjon: number;
        };
        "no.nav.aap.oppgave.plukk.PlukkOppgaveDto": {
            /** Format: int64 */
            oppgaveId: number;
            /** Format: int64 */
            versjon: number;
        };
        "no.nav.aap.oppgave.produksjonsstyring.AntallOppgaverDto": {
            /** @enum {string|null} */
            behandlingstype?: "FØRSTEGANGSBEHANDLING" | "REVURDERING" | "TILBAKEKREVING" | "KLAGE" | "DOKUMENT_HÅNDTERING" | "JOURNALFØRING" | null;
        };
        "no.nav.aap.postmottak.kontrakt.hendelse.AvklaringsbehovHendelseDto": {
            definisjon: components["schemas"]["no.nav.aap.postmottak.kontrakt.hendelse.DefinisjonDTO"];
            endringer: components["schemas"]["no.nav.aap.postmottak.kontrakt.hendelse.EndringDTO"][];
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
        };
        "no.nav.aap.postmottak.kontrakt.hendelse.DefinisjonDTO": {
            /** @enum {string} */
            behovType: "MANUELT_PÅKREVD" | "MANUELT_FRIVILLIG" | "VENTEPUNKT";
            /** @enum {string} */
            "l\u00F8sesISteg": "ROUTING" | "KATEGORISER_DOKUMENT" | "DIGITALISER_DOKUMENT" | "START_BEHANDLING" | "AVKLAR_TEMA" | "SETT_FAGSAK" | "ENDELIG_JOURNALFØRING" | "OVERLEVER_TIL_FAGSYSTEM" | "UDEFINERT" | "AVKLAR_SAK" | "ENDRE_TEMA" | "VIDERESEND";
            /** @enum {string} */
            type: "9001" | "1337" | "1338" | "1339" | "1340" | "1341";
        };
        "no.nav.aap.postmottak.kontrakt.hendelse.DokumentflytStoppetHendelse": {
            avklaringsbehov: components["schemas"]["no.nav.aap.postmottak.kontrakt.hendelse.AvklaringsbehovHendelseDto"][];
            /** @enum {string} */
            behandlingType: "DokumentHåndtering" | "Journalføring";
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            hendelsesTidspunkt: string;
            journalpostId: components["schemas"]["no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId"];
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            opprettetTidspunkt: string;
            /** Format: uuid */
            referanse: string;
            /** @enum {string} */
            status: "OPPRETTET" | "UTREDES" | "IVERKSETTES" | "AVSLUTTET";
        };
        "no.nav.aap.postmottak.kontrakt.hendelse.EndringDTO": {
            endretAv: string;
            /**
             * Format: date
             * @example 2024-12-03
             */
            frist?: string | null;
            /** @enum {string} */
            status: "OPPRETTET" | "AVSLUTTET" | "SENDT_TILBAKE_FRA_BESLUTTER" | "SENDT_TILBAKE_FRA_KVALITETSSIKRER" | "AVBRUTT";
            /**
             * Format: date-time
             * @example 2024-12-03T12:09:28.07995
             */
            tidsstempel: string;
        };
        "no.nav.aap.postmottak.kontrakt.journalpost.JournalpostId": {
            /** Format: int64 */
            referanse: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
