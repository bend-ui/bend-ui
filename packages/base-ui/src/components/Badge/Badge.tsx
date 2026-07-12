import { badge, type BadgeVariantProps } from '@bend-ui/styled-system/recipes';
import { css, cx } from '@bend-ui/styled-system/css';
import { splitCssProps } from '@bend-ui/styled-system/jsx';
import type { ComponentProps } from 'react';

export interface BadgeProps
  extends ComponentProps<'span'>,
    BadgeVariantProps {
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
}

const tonePalette: Record<
  NonNullable<BadgeProps['tone']>,
  BadgeProps['palette']
> = {
  neutral: 'default',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
};

const Component = (props: BadgeProps) => {
  const { tone, palette, className, ...rest } = props;
  const [variantProps, remainingProps] = badge.splitVariantProps({
    ...rest,
    palette: palette ?? (tone ? tonePalette[tone] : undefined),
  });
  const [styleProps, elementProps] = splitCssProps(remainingProps);
  return (
    <span
      className={cx(badge(variantProps), css(styleProps), className)}
      {...elementProps}
    />
  );
};

Component.displayName = 'Badge';

export const Badge = Object.assign(Component, {
  Root: Component,
});
