import { buttonStyles } from '@particles/primitives';
import { createStyles } from '../../styles';

export interface ButtonStylesParams {
  variant?: 'solid' | 'outline' | 'link';
  palette?: 'primary' | 'neutral' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isFull?: boolean;
}

export default createStyles(({ palette }: ButtonStylesParams) => ({
  button: {
    ...buttonStyles.root,
    gap: '$xs',
    borderRadius: '$lg',
    fontFamily: '$base',
    fontSize: '$base',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    textDecoration: 'none',
    boxShadow: '$sm',
    outline: 'none',
    '&:focus-visible': {
      focusRing: '$focusRing',
    },
    variants: {
      size: {
        sm: {
          py: '$xs',
          px: '$xs',
          fontSize: '$sm',
          lineHeight: '16px',
        },
        md: {
          py: '$xs',
          px: '$sm',
          fontSize: '$md',
          lineHeight: '20px',
        },
        lg: {
          py: '$sm',
          px: '$md',
          fontSize: '$lg',
          lineHeight: '24px',
        },
      },
      variant: {
        solid: {
          color: `$on-${palette}`,
          backgroundColor: `$${palette}`,
          '&:hover': {
            backgroundColor: `$${palette}-hover`,
          },
        },
        outline: {
          color: `$${palette}`,
          backgroundColor: 'transparent',
          borderColor: `$${palette}`,
          '&:hover': {
            color: `$${palette}-hover`,
            borderColor: `$${palette}-hover`,
          },
        },
      },
      isFull: {
        true: {
          width: '100%',
        },
      },
    },
  },
}));
