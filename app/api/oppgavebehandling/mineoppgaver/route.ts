import { mockOppgaver } from 'mocks/mockOppgaver';
import { fetchProxy } from 'lib/services/fetchProxy';
import { Oppgaver } from 'lib/types/oppgavebehandling';
import { hentBrukerInformasjon, isLocal } from '@navikt/aap-felles-utils';

const oppgavestyringApiBaseUrl = process.env.OPPGAVESTYRING_API_BASE_URL;
const oppgavestyringApiScope = process.env.OPPGAVESTYRING_API_SCOPE ?? '';

export async function GET() {
  if (isLocal()) {
    return new Response(JSON.stringify(mockOppgaver), { status: 200 });
  }

  const { NAVident } = await hentBrukerInformasjon();
  if (!NAVident) {
    return new Response(JSON.stringify({ message: JSON.stringify('Fant ikke NAVIdent'), status: 500 }), {
      status: 500,
    });
  }
  const searchparams = new URLSearchParams();
  searchparams.append('filtrering[tilordnetRessurs]', `${NAVident}`);
  const url = `${oppgavestyringApiBaseUrl}/oppgaver?${searchparams.toString()}`;

  try {
    const res = await fetchProxy<Oppgaver>(url, oppgavestyringApiScope, 'GET');
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: JSON.stringify(error), status: 500 }), { status: 500 });
  }
}
