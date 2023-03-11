import { visuallyHiddenStyle } from '@particles/primitives';

export const useRadio = () => {
  const getControlProps = () => ({ 'aria-hidden': true });
  const getInputProps = () => ({
    style: visuallyHiddenStyle,
  });
  return { getControlProps, getInputProps };
};
