import { forwardRef } from 'react';
import { createPolymorphicComponent } from '../../utils';
import { Icon } from './ButtonIcon';
import type { ElementType, ReactNode } from 'react';

export interface ButtonPrimitiveRootProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

const Root = forwardRef<HTMLButtonElement, ButtonPrimitiveRootProps>(
  (props, ref) => {
    const { children, as: Component = 'button', ...rest } = props;

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  },
);

Root.displayName = 'ButtonPrimitive.Root';

export default createPolymorphicComponent<'button', ButtonPrimitiveRootProps>(
  Root,
  { Root, Icon },
);
