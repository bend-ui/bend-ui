import { visuallyHiddenStyle } from '@particles/primitives';

export const useCheckbox = () => {
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
