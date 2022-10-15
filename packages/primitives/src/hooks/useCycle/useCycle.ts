import { useState } from "react";

export interface UseCycleProps<T> {
  initialValue: T;
  values: T[];
}

export const useCycle = <T>(props: UseCycleProps<T>) => {
  const { initialValue, values } = props;

  const [value, setValue] = useState(initialValue);

  const cycle = () => {
    const currentValueIndex = values.indexOf(value);
    const isNextLastItem = currentValueIndex === values.length - 1;
    const nextValue = isNextLastItem ? 0 : currentValueIndex + 1;
    setValue(values[nextValue]);
  };

  return [value, cycle] as const;
};
