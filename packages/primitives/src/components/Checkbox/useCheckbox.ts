import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  useCallback,
} from 'react';
import { useControlled, useId } from '../../hooks';

export type PropsGetter = (
  props: Record<string, unknown>
) => ComponentPropsWithoutRef<any>;

type CheckedState = 'checked' | 'unchecked' | 'indeterminate';

export interface UseCheckboxProps {
  id?: string;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  onCheckedChange?(): void;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

export const useCheckbox = (props: UseCheckboxProps = {}) => {
  const {
    id,
    isChecked: isCheckedProp,
    defaultChecked,
    isDisabled,
    onCheckedChange,
    onChange,
  } = props;
  const uuid = useId(id);
  const [isChecked, toggleChecked] = useControlled({
    value: isCheckedProp,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const getInputProps: PropsGetter = useCallback(
    (props) => ({
      ...props,
      id: uuid,
      role: 'checkbox',
      disabled: isDisabled,
      checked: isChecked,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        toggleChecked(!isChecked);
      },
    }),
    [isChecked, isDisabled, onChange, toggleChecked, uuid]
  );

  const getLabelProps: PropsGetter = useCallback(
    (props) => ({
      ...props,
      htmlFor: uuid,
      'data-state': getState(isChecked),
    }),
    [isChecked, uuid]
  );

  const getControlProps: PropsGetter = useCallback(
    (props) => ({
      ...props,
      onClick: () => toggleChecked(!isChecked),
      role: 'presentation',
      'data-state': getState(isChecked),
    }),
    [isChecked, toggleChecked]
  );

  return {
    getInputProps,
    getLabelProps,
    getControlProps,
    isChecked,
  };
};

const getState = (isChecked: boolean): CheckedState =>
  isChecked ? 'checked' : 'unchecked';
