import React, { useLayoutEffect } from 'react';
import { useClick, useFloating, useInteractions } from '@floating-ui/react';

export interface PopperProps {
  anchorRef: React.RefObject<any>;
  isOpen: boolean;
  onClose(): void;
}

const Popper: React.FC<PopperProps> = (props) => {
  const { children, anchorRef, isOpen, onClose, ...rest } = props;
  const { x, y, reference, floating, strategy, context } = useFloating({
    open: isOpen,
    onOpenChange: onClose,
  });

  useLayoutEffect(() => {
    reference(anchorRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorRef.current]);

  const { getFloatingProps } = useInteractions([useClick(context)]);

  return (
    isOpen && (
      <div
        {...getFloatingProps({
          className: 'Popper',
          ref: floating,
          style: {
            position: strategy,
            top: y ?? '',
            left: x ?? '',
          },
        })}
        {...rest}
      >
        {children}
      </div>
    )
  );
};

export default Object.assign(Popper, {});
