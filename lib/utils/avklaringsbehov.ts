import { AvklaringsbehovKode } from 'lib/types/types';
import { exhaustiveCheck } from 'lib/utils/typescript';

export function mapBehovskodeTilBehovstype(kode: AvklaringsbehovKode): string {
  switch (kode) {
    //Behandlingsflyt
    case '5001':
      return 'Avklar student (§ 11-14)';
    case '5003':
      return 'Avklar sykdom (§ 11-5)';
    case '5004':
      return 'Vurdering av etablert og uutnyttet arbeidsevne (§ 11-23)';
    case '5005':
      return 'Fritak meldeplikt (§ 11-10)';
    case '5006':
      return 'Avklar bistandsbehov (§ 11-6)';
    case '5007':
      return 'Vurder sykepengeerstatning (§ 11 -13)';
    case '5008':
      return 'Fastsett beregningstidspunkt';
    case '5009':
      return 'Avklar barnetillegg';
    case '5098':
      return 'Foreslå vedtak';
    case '5099':
      return 'Fatte vedtak';
    case '5097':
      return 'Kvalitetssikring';
    case '9001':
      return 'Manuelt satt på vent';
    case '9002':
      return 'Bestill brev';
    case '9003':
      return 'Bestill legeerklæring';
    case '5010':
      return 'Avklar soningsvurdering';
    case '5011':
      return 'Avklar helseinstitusjon';
    case '5012':
      return 'Avklar samordning gradering';
    case '5013':
      return 'Avklar yrkesskade';
    case '5014':
      return 'Fastsett yrkesskadebeløp';
    case '5015':
      return '§ 11-17 AAP som arbeidssøker';
    case '5016':
      return 'Forhåndsvarsel aktivitetsplikt';
    case '5017':
      return '§ 11-2 Lovvalg og medlemskap';
    case '5018':
      return 'Venter på uttalelse fra bruker på forhåndsvarsel';
    case '5019':
      return 'Venter på utenlandsoverføring';
    case '5020':
      return 'Forutgående medlemskap';
    case '5050':
      return 'Skriv brev';
    // Postmottak
    case '1337':
      return 'Kategoriser dokument';
    case '1338':
      return 'Digitaliser dokument';
    case '1339':
      return 'Avklar tema';
    case '1340':
      return 'Avklar saksnummer';
    case '1341':
      return 'Endre tema';
  }
  exhaustiveCheck(kode);
}
export const avklaringsbehovOptions = [
  'Avklar student (§ 11-14)',
  'Avklar sykdom (§ 11-5)',
  'Vurdering av etablert og uutnyttet arbeidsevne (§ 11-23)',
  'Fritak meldeplikt (§ 11-10)',
  'Avklar bistandsbehov (§ 11-6)',
  'Vurder sykepengeerstatning (§ 11 -13)',
  'Fastsett beregningstidspunkt',
  'Avklar barnetillegg',
  'Foreslå vedtak',
  'Fatte vedtak',
  'Kvalitetssikring',
  'Manuelt satt på vent',
  'Bestill brev',
  'Bestill legeerklæring',
  'Avklar soningsvurdering',
  'Avklar helseinstitusjon',
  'Avklar samordning gradering',
  'Avklar yrkesskade',
  'Fastsett yrkesskadebeløp',
  'Skriv brev',
  'Kategoriser dokument',
  'Digitaliser dokument',
  'Avklar tema',
  'Avklar saksnummer',
  'Endre tema',
];
export const avklaringsbehovKodeOgLabel = [
  { value: '5001', label: 'Avklar student (§ 11-14)' },
  { value: '5003', label: 'Avklar sykdom (§ 11-5)' },
  { value: '5004', label: 'Vurdering av etablert og uutnyttet arbeidsevne (§ 11-23)' },
  { value: '5005', label: 'Fritak meldeplikt (§ 11-10)' },
  { value: '5006', label: 'Avklar bistandsbehov (§ 11-6)' },
  { value: '5007', label: 'Vurder sykepengeerstatning (§ 11 -13)' },
  { value: '5008', label: 'Fastsett beregningstidspunkt' },
  { value: '5009', label: 'Avklar barnetillegg' },
  { value: '5098', label: 'Foreslå vedtak' },
  { value: '5099', label: 'Fatte vedtak' },
  { value: '5097', label: 'Kvalitetssikring' },
  { value: '9001', label: 'Manuelt satt på vent' },
  { value: '9002', label: 'Bestill brev' },
  { value: '9003', label: 'Bestill legeerklæring' },
  { value: '5010', label: 'Avklar soningsvurdering' },
  { value: '5011', label: 'Avklar helseinstitusjon' },
  { value: '5012', label: 'Avklar samordning gradering' },
  { value: '5013', label: 'Avklar yrkesskade' },
  { value: '5014', label: 'Fastsett yrkesskadebeløp' },
  { value: '5050', label: 'Skriv brev' },
  { value: '1337', label: 'Kategoriser dokument' },
  { value: '1338', label: 'Digitaliser dokument' },
  { value: '1339', label: 'Avklar tema' },
  { value: '1340', label: 'Avklar saksnummer' },
  { value: '1341', label: 'Endre tema' },
];
export type AvklaringsbehovLabel = (typeof avklaringsbehovOptions)[number];
