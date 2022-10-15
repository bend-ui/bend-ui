import { createStyles } from '../../styles';

export default createStyles(({ withIcon }) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '$md',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '$outline',
    overflow: 'hidden',
  },
  input: {
    width: '100%',
    border: 'none',
    // borderRadius: '$md',
    // borderStyle: 'solid',
    // borderColor: '$outline',
    py: '$xs',
    variants: {
      size: {
        sm: {
          height: '$sm',
          px: '$sm',
          paddingLeft: withIcon ? '40px' : undefined,
        },
        md: {
          height: '$md',
          px: '$md',
          paddingLeft: withIcon ? '40px' : undefined,
        },
        lg: {
          height: '$lg',
          px: '$lg',
          paddingLeft: withIcon ? '40px' : undefined,
        },
        xl: {
          height: '$xl',
          px: '$xl',
          paddingLeft: withIcon ? '40px' : undefined,
        },
        '2xl': {
          height: '$2xl',
          px: '$2xl',
          paddingLeft: withIcon ? '40px' : undefined,
        },
      },
    },
  },
  icon: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: '1',
    left: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        sm: {
          width: '$sm',
        },
        md: {
          width: '$md',
        },
        lg: {
          width: '$lg',
        },
        xl: {
          width: '$xl',
        },
        '2xl': {
          width: '$2xl',
        },
      },
    },
  },
  startSection: {
    position: 'absolute',
    zIndex: '1',
    left: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endSection: {
    position: 'absolute',
    zIndex: '1',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startLabel: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    // borderTopLeftRadius: '$md',
    // borderBottomLeftRadius: '$md',
    // borderStyle: 'solid',
    // borderColor: '$outline',
    // borderRight: 'none',
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
    },
  },
  endLabel: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    // borderTopRightRadius: '$md',
    // borderBottomRightRadius: '$md',
    // borderStyle: 'solid',
    // borderColor: '$outline',
    // borderLeft: 'none',
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
    },
  },
}));
