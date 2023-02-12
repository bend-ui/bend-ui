import { ReactNode } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { forwardRef } from '../../utils';
import { Portal } from '../Portal';
import { useMenuContext } from './MenuContext';

export type MenuListProps = { children?: ReactNode };

export const MenuList = forwardRef<MenuListProps, 'div'>((props, ref) => {
  const { children, ...rest } = props;
  const { refs, getFloatingProps, ...context } = useMenuContext();
  const mergedRefs = useMergeRefs([ref, refs.setFloating]);

  return (
    <Portal>
      {context.isOpen && (
        <div
          ref={mergedRefs}
          style={{
            position: context.strategy,
            top: context.y ?? 0,
            left: context.x ?? 0,
            ...props.style,
          }}
          {...getFloatingProps(rest)}
        >
          {children}
        </div>
      )}
    </Portal>
  );
});
