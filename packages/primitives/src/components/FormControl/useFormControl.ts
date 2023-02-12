import { createContext } from '../../utils';

type ContextType = ReturnType<typeof useFormControl>;

export const [FormControlProvider, useFormControlContext] =
  createContext<ContextType>('FormControlContext');

export const useFormControl = () => {
  return {};
};
