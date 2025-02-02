type PossibleRef<T> = React.Ref<T | null> | undefined;

const setRef = <T>(ref: PossibleRef<T>, value: T) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.RefObject<T>).current = value;
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
