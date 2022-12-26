import { useCallback, useState } from 'react';

export const useCheckbox = ({ defaultValue = false }) => {
  // TODO: use toggle hook
  // TODO: use controlled hook
  const [isChecked, setChecked] = useState(defaultValue);

  const getInputProps = useCallback(
    () => ({ checked: isChecked, onChange: () => setChecked(!isChecked) }),
    [isChecked]
  );

  const getLabelProps = () => ({});

  const getIndicatorProps = () => ({ onClick: () => setChecked(!isChecked) });

  return { getInputProps, getLabelProps, getIndicatorProps, isChecked };
};
