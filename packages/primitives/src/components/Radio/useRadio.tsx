import { useState } from 'react';
import { useId } from '../../hooks';

export interface UseRadioProps {
  id?: string;
  defaultChecked?: boolean;
  isDisabled?: boolean;
}

export const useRadio = (props: UseRadioProps) => {
  const { id, defaultChecked } = props;
  const uuid = useId(id);
  // TODO: use toggle hook
  // TODO: use controlled hook
  const [isChecked, setChecked] = useState(defaultChecked);

  const getInputProps = () => ({
    id: uuid,
    checked: isChecked,
    onChange: () => setChecked(!isChecked),
  });

  const getLabelProps = () => ({
    htmlFor: uuid,
    'data-state': isChecked ? 'checked' : 'unchecked',
  });

  const getControlProps = () => ({
    onClick: () => setChecked(!isChecked),
    role: 'presentation',
    'data-state': isChecked ? 'checked' : 'unchecked',
  });

  return {
    getInputProps,
    getLabelProps,
    getControlProps,
    isChecked,
  };
};
