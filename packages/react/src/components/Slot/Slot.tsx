import { Children, cloneElement, isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import type { SlotProps } from './Slot.types';

export const Slot = (props: SlotProps) => {
  const { children, ref, ...rest } = props;

  const mergedRef = useMergeRefs([ref, (children as any).ref]);

  if (!Children.only(children)) {
    console.error(
      'Slot must be passed a single child. Received:',
      Children.count(children),
    );
    return null;
  }

  if (!isValidElement(children)) {
    console.error(
      'Slot must be passed a valid element. Received:',
      typeof children,
    );
    return null;
  }

  return cloneElement(children as React.ReactElement<any>, {
    ...Object.assign(rest, children.props),
    ref: mergedRef,
  });
};

Slot.displayName = 'Slot';
