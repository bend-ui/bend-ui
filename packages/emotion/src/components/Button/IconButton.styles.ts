import { createStyles } from '../../styles';

export default createStyles({
  root: {
    variants: {
      size: {
        sm: {
          maxWidth: '$sm',
          width: '$sm',
          height: '$sm',
        },
        md: {
          maxWidth: '$md',
          width: '$md',
          height: '$md',
        },
        lg: {
          maxWidth: '$lg',
          width: '$lg',
          height: '$lg',
        },
        xl: {
          maxWidth: '$xl',
          width: '$xl',
          height: '$xl',
        },
        '2xl': {
          maxWidth: '$2xl',
          width: '$2xl',
          height: '$2xl',
        },
      },
    },
  },
});
