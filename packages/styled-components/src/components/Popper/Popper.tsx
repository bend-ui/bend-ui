import { useLayoutEffect } from 'react';
import { Portal } from '@particles/primitives';
import { shift, useFloating } from '@floating-ui/react';

import { system } from '../../system';
import type { Placement } from '@floating-ui/react';
import type { FC, ReactNode, RefObject } from 'react';

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
