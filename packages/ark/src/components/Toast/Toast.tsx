import { createToaster, Toast as ToastPrimitive } from '@ark-ui/react';
import { toast } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { LuX } from 'react-icons/lu';
import { createStyleContext } from '../../utils';
import type { ElementRef } from 'react';
import type { ToastProps } from './Toast.types';

const { withProvider, withContext } = createStyleContext(toast);

export const Root = withProvider(ToastPrimitive.Root, 'root');

export const Title = withContext(ToastPrimitive.Title, 'title');

export const Description = withContext(
  ToastPrimitive.Description,
  'description',
);

export const CloseTrigger = withContext(
  ToastPrimitive.CloseTrigger,
  'closeTrigger',
);

const Component = forwardRef<ElementRef<typeof Root>, ToastProps>(
  (props, ref) => {
    const { title, description, ...rest } = props;
    return (
      <Root ref={ref} {...rest}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CloseTrigger>
          <LuX />
        </CloseTrigger>
      </Root>
    );
  },
);

Component.displayName = 'Toast';

export const Toast = Object.assign(Component, {
  Root,
  Title,
  Description,
  CloseTrigger,
});

export { createToaster };
