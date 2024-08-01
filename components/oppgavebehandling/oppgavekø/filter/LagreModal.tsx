import { Alert, BodyShort, Button, Modal } from '@navikt/ds-react';
import { FormEvent, useContext, useRef, useState } from 'react';
import { KøContext } from 'components/oppgavebehandling/KøContext';
import { useConfigForm, FormField } from '@navikt/aap-felles-react';
import { fetchProxy } from 'lib/clientApi';
import { byggFilterFraKø } from 'components/oppgavebehandling/lib/filter';
import { useSWRConfig } from 'swr';

export const LagreModal = () => {
  const [feilVedLagring, settFeilVedLagring] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const køContext = useContext(KøContext);
  const { mutate } = useSWRConfig();

  const { formFields, form } = useConfigForm({
    navn: {
      type: 'text',
      label: 'Kønavn',
      rules: {
        required: 'Køen må ha et navn',
      },
    },
    beskrivelse: {
      type: 'textarea',
      label: 'Beskrivelse',
      rules: {
        required: 'Du må beskrive hva køen dekker',
      },
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    form.handleSubmit(async (data) => {
      const nyttFilter = byggFilterFraKø(data.navn, data.beskrivelse, køContext.valgtKø);
      const res = await fetchProxy('/api/oppgavebehandling/filter/', 'POST', nyttFilter);
      if (!res) {
        settFeilVedLagring(true);
      } else {
        mutate('lagrede_filter');
        settFeilVedLagring(false);
        modalRef.current?.close();
      }
    })(event);
  };

  return (
    <>
      <Button variant={'secondary'} onClick={() => modalRef.current?.showModal()}>
        Lagre som kø
      </Button>
      <Modal ref={modalRef} header={{ heading: 'Overskrift' }}>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <BodyShort spacing>Søket kan lagres som en standard kø som vises for alle i din avdeling</BodyShort>
            <FormField form={form} formField={formFields.navn} />
            <FormField form={form} formField={formFields.beskrivelse} />
            {feilVedLagring && (
              <Alert variant={'error'} style={{ marginTop: '1rem' }}>
                Noe gikk galt med lagring av filter.
              </Alert>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button>Lagre kø</Button>
            <Button type="button" variant={'tertiary'} onClick={() => modalRef.current?.close()}>
              Avbryt
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
