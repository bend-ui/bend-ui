import type { MutableRefObject, Ref } from 'react';

type PossibleRef<T> = Ref<T | null> | undefined;

const setRef = <T>(ref: PossibleRef<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as MutableRefObject<T | null>).current = value;
  }
};

export const composeRefs = <T>(
  ...refs: PossibleRef<T>[]
): ((node: T | null) => void) => {
  return (node) => {
    for (const ref of refs) {
      setRef(ref, node);
    }
  };
};
