import React from 'react';

export const useCheckbox = ({ defaultValue = false }) => {
  // TODO: use toggle hook
  // TODO: use controlled hook
  const [isChecked, setChecked] = React.useState(defaultValue);

  const getInputProps = React.useCallback(
    () => ({ checked: isChecked, onChange: () => setChecked(!isChecked) }),
    [isChecked]
  );

  const getLabelProps = () => ({});

  const getIndicatorProps = () => ({ onClick: () => setChecked(!isChecked) });

  return { getInputProps, getLabelProps, getIndicatorProps, isChecked };
};
