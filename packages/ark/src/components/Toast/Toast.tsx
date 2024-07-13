import { createToaster, Toaster, Toast as ToastPrimitive } from '@ark-ui/react';
import { toast } from '@particles/styled-system/recipes';
import { forwardRef } from 'react';
import { LuX } from 'react-icons/lu';
import { createStyleContext } from '../../utils';
import { Button } from '..';
import type { ElementRef } from 'react';
import type { ToastProps } from './Toast.types';

const { withProvider, withContext } = createStyleContext(toast);

export const Root = withProvider<HTMLDivElement, ToastPrimitive.RootProps>(
  ToastPrimitive.Root,
  'root',
);

export const Title = withContext<HTMLDivElement, ToastPrimitive.TitleProps>(
  ToastPrimitive.Title,
  'title',
);

export const Description = withContext<
  HTMLDivElement,
  ToastPrimitive.DescriptionProps
>(ToastPrimitive.Description, 'description');

export const CloseTrigger = withContext<
  HTMLButtonElement,
  ToastPrimitive.CloseTriggerProps
>(ToastPrimitive.CloseTrigger, 'closeTrigger');

export const ActionTrigger = withContext<
  HTMLButtonElement,
  ToastPrimitive.ActionTriggerProps
>(ToastPrimitive.ActionTrigger, 'actionTrigger');

const Component = forwardRef<ElementRef<typeof Root>, ToastProps>(
  (props, ref) => {
    const { title, description, ...rest } = props;
    return (
      <Root ref={ref} {...rest}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CloseTrigger asChild>
          <Button>
            <LuX />
          </Button>
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
  ActionTrigger,
});

export { createToaster, Toaster };
