import { visuallyHiddenStyle } from '@particles/primitives';

export const useRadio = () => {
  const getControlProps = () => {
    return { 'aria-hidden': true };
  };
  const getInputProps = () => {
    return {
      style: visuallyHiddenStyle,
    };
  };
  return { getControlProps, getInputProps };
};
