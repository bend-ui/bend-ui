import { createStyles } from '../../styles';

export interface InputStylesParams {
  variant?: 'solid' | 'outline';
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
    '&:focus': {
      borderColor: '$blue600',
      focusRing: '$focusRing',
    },
    variants: {
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
