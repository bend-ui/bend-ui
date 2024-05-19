import { useMergeRefs } from '@floating-ui/react';
import { Button } from '../Button';
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
      <Button ref={mergedRefs} {...getReferenceProps(rest)}>
        {children}
      </Button>
    );
  },
);
