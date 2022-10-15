import { createStyles } from '../../styles';

export interface BadgeStylesParams {
  variant?: 'solid' | 'outline' | 'subtle';
  palette?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
}

export default createStyles(({ palette }: BadgeStylesParams) => ({
  root: {
    display: 'inline-flex',
    borderRadius: '$md',
    fontWeight: '$medium',
    variants: {
      size: {
        sm: {
          px: '$xs',
          fontSize: '$xs',
          lineHeight: '1rem',
          textTransform: 'uppercase',
        },
        md: {
          px: '$sm',
          fontSize: '$sm',
          lineHeight: '1.5rem',
        },
        lg: {
          px: '$md',
          fontSize: '$md',
          lineHeight: '2rem',
        },
      },
      variant: {
        solid: {
          color: `$on-${palette}`,
          backgroundColor: `$${palette}`,
        },
        outline: {
          color: `$${palette}`,
          border: `2px solid $${palette}`,
        },
        subtle: {},
      },
      isRounded: {
        true: {
          borderRadius: '$full',
        },
      },
    },
  },
}));
