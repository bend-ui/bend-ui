import clsx from 'clsx';
import { useMergeRefs } from '@floating-ui/react';
import { Button, twStyles } from '../Button';
import { forwardRef } from '../../utils';
import { useMenuContext } from './MenuContext';
import type { ReactNode } from 'react';

type MenuButtonProps = { children?: ReactNode };

export const MenuButton = forwardRef<MenuButtonProps, 'button'>(
  (props, ref) => {
    const { children, ...rest } = props;
    const { refs, getReferenceProps } = useMenuContext();
    const mergedRefs = useMergeRefs([ref, refs.setReference]);

    return (
      <Button
        className={clsx(twStyles.root)}
        ref={mergedRefs}
        {...getReferenceProps(rest)}
      >
        {children}
      </Button>
    );
  }
);
