import { createContext } from '../../utils';

export const [FormControlProvider, useFormControlContext] =
  createContext('FormControlContext');

export const useFormControl = () => {
  const context = useFormControlContext();

  return { context };
};
