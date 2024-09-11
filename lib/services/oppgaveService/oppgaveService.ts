export interface Kø {
  id: string;
  navn: string;
}

export const hentKøer = async (): Promise<Kø[]> => {
  return await Promise.resolve([
    { id: '1', navn: 'Standard AAP oppgavekø (Eldst først)' },
    { id: '2', navn: 'Postmottak (Eldst først)' },
  ]);
};

export const velgNesteOppgave = async (køId: string): Promise<unknown> => {
  console.log('Behandler neste oppgave', køId);
  return await Promise.resolve({});
};
