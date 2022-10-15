import { createStyles } from '../../styles';

export default createStyles({
  root: {
    userSelect: 'none',
    flexGrow: 0,
    overflow: 'hidden',
    borderRadius: '$full',
    variants: {
      size: {
        sm: {
          width: '2rem',
          height: '2rem',
        },
        md: {
          width: '3rem',
          height: '3rem',
        },
        lg: {
          width: '4rem',
          height: '4rem',
        },
      },
    },
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});
