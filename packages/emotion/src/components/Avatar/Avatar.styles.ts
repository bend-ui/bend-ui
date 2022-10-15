import { createStyles } from '../../styles';

export default createStyles({
  root: {
    borderRadius: '$full',
    variants: {
      size: {
        xs: {
          width: '$xs',
          height: '$xs',
        },
        sm: {
          width: '$sm',
          height: '$sm',
        },
        md: {
          width: '$md',
          height: '$md',
        },
        lg: {
          width: '$lg',
          height: '$lg',
        },
        xl: {
          width: '$xl',
          height: '$xl',
        },
        '2xl': {
          width: '$2xl',
          height: '$2xl',
        },
      },
    },
  },
});
