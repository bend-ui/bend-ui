import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '$full',
    fontSize: '$xs',
    fontWeight: '$semibold',
    variants: {
      palette: {
        primary: {
          color: '$on-primary',
          backgroundColor: '$primary',
        },
        danger: {
          color: '$on-danger',
          backgroundColor: '$danger',
        },
      },
      size: {
        sm: {
          height: '$xs',
          px: '$xs',
        },
        md: {
          height: '$sm',
          px: '$sm',
        },
        lg: {
          height: '$md',
          px: '$md',
        },
      },
    },
  },
});
