import { theme } from '@particles/theme';
import { createStyles } from '../../styles';

export interface InputStylesParams {
  variant?: 'solid' | 'outline' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  isRounded?: boolean;
  isInvalid?: boolean;
  withIcon?: boolean;
}

export default createStyles((params: InputStylesParams) => ({
  wrapper: {
    position: 'relative',
    variants: {
      isInvalid: {
        true: {
          color: '$danger',
        },
      },
    },
  },
  root: {
    py: '$xs',
    px: '$sm',
    color: '$on-surface',
    backgroundColor: '$surface',
    border: '1px solid $outline',
    borderRadius: '$md',
    boxShadow: '$sm',
    outline: 'none',
    '&:focus, &:focus-within': {
      outline: 'none',
      borderColor: '$primary',
      boxShadow: '$focusRing',
    },
    ...theme.fns.focusStyles(),
    variants: {
      isRounded: {
        true: {
          borderRadius: '$full',
        },
      },
      withIcon: {
        true: {
          pl: '$xxl',
        },
      },
      isInvalid: {
        true: {
          color: '$danger',
          border: '1px solid $danger',
        },
      },
    },
  },
  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    px: '$xs',
  },
}));
