import { useState } from 'react';

export interface UseControlledProps<T> {
  value?: T;
  defaultValue?: T;
  onChange?(value: T): void;
}

export const useControlled = <T>(props: UseControlledProps<T>) => {
  const { value, defaultValue, onChange } = props;
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue,
  );

  const handleChange = (value: T) => {
    setInternalValue(value);
    onChange?.(value);
  };

  if (value === undefined && defaultValue === undefined) {
    console.warn(
      `You must provide a defaultValue when using an uncontrolled component`,
    );
  }

  if (value !== undefined) {
    return [value, onChange] as const;
  }

  return [internalValue, handleChange] as const;
};
