import { forwardRef, Tooltip as TooltipPrimitive } from '@particles/primitives';
import { cva, cx } from '@particles/panda-system/css';
import type { RecipeVariantProps } from '@particles/panda-system/css';
import type { ReactNode } from 'react';

const styles = {
  root: cva({}),
  trigger: cva({}),
  content: cva({
    base: {
      bg: 'surface',
    },
  }),
};

export type TooltipVariants = RecipeVariantProps<typeof styles.root>;

export type TooltipProps = TooltipVariants & {
  children?: ReactNode;
  content: string;
};

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const { children, className, content, ...rest } = props;
  return (
    <TooltipPrimitive.Root className={cx(className)} {...rest}>
      <TooltipPrimitive.Trigger>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content ref={ref}>{content}</TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
});

export default Tooltip;
