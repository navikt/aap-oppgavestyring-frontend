import {NextRequest} from "next/server";
import {isLocal, logError} from "@navikt/aap-felles-utils";
import {avreserverOppgave} from "../../../../../lib/services/oppgaveService/oppgaveService";

interface Params {
    params: { id: string };
}

export async function POST(req: NextRequest, { params }: Params) {
    if (isLocal()) {
        return new Response(JSON.stringify([
            {
                saksnummer: `${params.id}`
            },
        ]));
    }

    try {
        const res = await avreserverOppgave(params.id)
        // return new Response(JSON.stringify(res), { status: 200 });
    } catch (error) {
        logError('Feil ved avreservering av oppgave', error);
        return new Response(JSON.stringify({ message: JSON.stringify(error) }), { status: 500 });
    }
}
