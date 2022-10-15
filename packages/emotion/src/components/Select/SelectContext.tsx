import { createContext } from '@particles/primitives';

export const [SelectProvider, useSelectContext] = createContext('Select', {
  getOptionProps: () => ({}),
});
