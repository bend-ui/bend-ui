import { Tooltip as TooltipPrimitive } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import { forwardRef } from 'react';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ComponentPropsWithoutRef } from 'react';

const styles = {
  root: cva({}),
  trigger: cva({}),
  content: cva({
    base: {
      bg: 'surface',
      py: '1',
      px: '2',
      rounded: 'sm',
      fontSize: 'xs',
    },
  }),
};

export type TooltipVariants = RecipeVariantProps<typeof styles.root>;

export type TooltipProps = ComponentPropsWithoutRef<'div'> &
  TooltipVariants & {
    /** The content of the tooltip */
    content: string;
  };

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (props, ref) => {
    const { children, className, content, ...rest } = props;
    return (
      <TooltipPrimitive.Root {...rest}>
        <TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          className={cx(styles.content(), className)}
        >
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    );
  },
);

Tooltip.displayName = 'Tooltip';
