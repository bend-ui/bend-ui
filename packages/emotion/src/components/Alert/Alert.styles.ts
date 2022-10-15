import { createStyles } from '../../styles';

export default createStyles({
  root: {
    borderRadius: '$md',
    borderWidth: '1px',
    borderStyle: 'solid',
    p: '$lg',
    variants: {
      palette: {
        info: {
          borderColor: '$info',
        },
        danger: {
          borderColor: '$danger',
          backgroundColor: '$danger-subtle',
        },
        warning: {
          borderColor: '$warning',
          backgroundColor: '$warning-subtle',
        },
        success: {
          borderColor: '$success',
          backgroundColor: '$success-subtle',
        },
      },
    },
  },
  title: {
    variants: {
      palette: {
        info: {
          color: '$info',
        },
        danger: {
          color: '$danger',
        },
        warning: {
          color: '$warning',
        },
        success: {
          color: '$success',
        },
      },
    },
  },
});
