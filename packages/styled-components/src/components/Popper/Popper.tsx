import { FC, ReactNode, RefObject, useLayoutEffect } from 'react';
import { Portal } from '@particles/primitives';
import { Placement, shift, useFloating } from '@floating-ui/react';

import { system } from '../../system';

export interface PopperProps {
  children?: ReactNode;
  triggerRef: RefObject<any>;
  placement?: Placement;
}

export const Popper: FC<PopperProps> = (props) => {
  const { children, triggerRef, placement = 'bottom' } = props;

  const { x, y, reference, floating, strategy } = useFloating({
    placement,
    middleware: [shift()],
  });

  useLayoutEffect(() => {
    reference(triggerRef.current);
  }, [reference, triggerRef]);

  return (
    <system.div>
      <Portal>
        <system.div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? '',
            left: x ?? '',
          }}
        >
          {children}
        </system.div>
      </Portal>
    </system.div>
  );
};
