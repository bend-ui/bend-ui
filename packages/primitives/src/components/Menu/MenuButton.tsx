import clsx from 'clsx';
import { useMergeRefs } from '@floating-ui/react';
import { Button, twButtonStyles } from '../Button';
import { forwardRef } from '../../utils';
import { useMenuContext } from './MenuContext';
import type { ReactNode } from 'react';

interface MenuButtonProps {
  children?: ReactNode;
}

export const MenuButton = forwardRef<'button', MenuButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { refs, getReferenceProps } = useMenuContext();
    const mergedRefs = useMergeRefs([ref, refs.setReference]);

    return (
      <Button
        ref={mergedRefs}
        className={clsx(twButtonStyles.root)}
        {...getReferenceProps(rest)}
      >
        {children}
      </Button>
    );
  },
);
