import {
  Badge as StyledBadge,
  type BadgeProps as StyledBadgeProps,
} from '@particles/react';

export interface BadgeProps extends StyledBadgeProps {
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
  const { tone, palette, ...rest } = props;
  return (
    <StyledBadge
      palette={palette ?? (tone ? tonePalette[tone] : undefined)}
      {...rest}
    />
  );
};

Component.displayName = 'Badge';

export const Badge = Object.assign(Component, {
  Root: StyledBadge,
});
