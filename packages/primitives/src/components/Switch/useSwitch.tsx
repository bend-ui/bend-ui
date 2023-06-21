import { useControlled, useId } from '../../hooks';

export interface UseSwitchProps {
  defaultChecked?: boolean;
  isChecked?: boolean;
  onCheckedChange?(isChecked: boolean): void;
  isDisabled?: boolean;
  id?: string;
}

export type SwitchState = 'checked' | 'unchecked';

export const useSwitch = (props: UseSwitchProps = {}) => {
  const {
    defaultChecked = false,
    isChecked: isCheckedProp,
    onCheckedChange,
    isDisabled,
    id,
  } = props;

  const uuid = useId(id);

  const [isChecked, setChecked] = useControlled({
    value: isCheckedProp,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const state: SwitchState = isChecked ? 'checked' : 'unchecked';

  const getLabelProps = () => ({
    'aria-checked': isChecked,
    'data-state': state,
    htmlFor: uuid,
  });

  return {
    defaultChecked,
    isChecked,
    onCheckedChange: (isChecked: boolean) => setChecked(isChecked),
    isDisabled,
    state,
    id: uuid,
    getLabelProps,
  };
};

export type UseSwitchReturn = ReturnType<typeof useSwitch>;
