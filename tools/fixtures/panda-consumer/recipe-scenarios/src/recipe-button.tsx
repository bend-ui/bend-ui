import type { ComponentProps } from 'react';
import { button, type ButtonVariantProps } from '../styled-system/recipes';

// Consumer-owned props come from the merged recipe, not the packed declaration.
export type RecipeButtonProps = Omit<
  ComponentProps<'button'>,
  keyof ButtonVariantProps
> &
  ButtonVariantProps;

export function RecipeButton({
  children,
  className,
  ...props
}: RecipeButtonProps) {
  const [variants, rest] = button.splitVariantProps(props);
  const slots = button(variants);
  return (
    <button
      {...rest}
      className={[slots.root, className].filter(Boolean).join(' ')}
    >
      <span className={slots.label}>{children}</span>
    </button>
  );
}
