import { afterEach, beforeAll, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  vi.mock('next/navigation', () => ({
    useParams: vi
      .fn()
      .mockReturnValue({ saksId: '123', behandlingsReferanse: '123', behandlingsType: 'AVKLAR_SYKDOM' }),
    useRouter: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
});
