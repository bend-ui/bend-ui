import { buttonStyles } from '@particles/primitives';
import { createStyles } from '../../styles';

export default createStyles(({ palette }) => ({
  root: {
    ...buttonStyles.root,
    gap: '$xs',
    borderRadius: '$md',
    py: '$xs',
    borderWidth: '1px',
    borderStyle: 'solid',
    boxShadow: '$sm',
    fontWeight: '$medium',
    variants: {
      size: {
        sm: {
          height: '$sm',
          px: '$sm',
        },
        md: {
          height: '$md',
          px: '$md',
        },
        lg: {
          height: '$lg',
          px: '$lg',
        },
        xl: {
          height: '$xl',
          px: '$xl',
        },
        '2xl': {
          height: '$2xl',
          px: '$2xl',
        },
      },
      variant: {
        solid: {
          color: `$on-${palette}`,
          backgroundColor: `$${palette}`,
          borderColor: 'transparent',
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
            backgroundColor: `$${palette}-subtle`,
            borderColor: `$${palette}-hover`,
          },
        },
        subtle: {
          color: `$${palette}`,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none',
          '&:hover': {
            color: `$${palette}`,
            backgroundColor: `$${palette}-subtle`,
          },
        },
        ghost: {
          color: `$${palette}`,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          },
        },
      },
      palette: {
        neutral: {
          color: '$on-neutral',
          '&:hover': {
            color: '$on-neutral',
          },
        },
      },
      isRounded: {
        true: {
          borderRadius: '$full',
        },
      },
    },
  },
}));
