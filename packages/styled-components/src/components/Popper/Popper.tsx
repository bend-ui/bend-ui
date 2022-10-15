import React, { useLayoutEffect } from 'react';
import { Portal } from '@particles/primitives';
import { Placement, shift, useFloating } from '@floating-ui/react-dom';

import { system } from '../../system';

export interface PopperProps {
  triggerRef: React.RefObject<any>;
  placement?: Placement;
}

export const Popper: React.FC<PopperProps> = (props) => {
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
