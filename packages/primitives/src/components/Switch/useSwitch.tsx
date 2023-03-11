import { useControlled } from '../../hooks';

export type UseSwitchProps = {
  defaultChecked?: boolean;
  isChecked?: boolean;
  onCheckedChange?(isChecked: boolean): void;
  isDisabled?: boolean;
};

export type SwitchState = 'checked' | 'unchecked';

export const useSwitch = (props: UseSwitchProps = {}) => {
  const {
    defaultChecked = false,
    isChecked: isCheckedProp,
    onCheckedChange,
    isDisabled,
  } = props;

  const [isChecked, setChecked] = useControlled({
    value: isCheckedProp,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const state: SwitchState = isChecked ? 'checked' : 'unchecked';

  return {
    defaultChecked,
    isChecked,
    onCheckedChange: (isChecked: boolean) => setChecked(isChecked),
    isDisabled,
    state,
  };
};

export type UseSwitchReturn = ReturnType<typeof useSwitch>;
