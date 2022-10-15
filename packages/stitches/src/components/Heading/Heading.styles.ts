import { createStyles, textStyles } from '../../styles';

export default createStyles({
  root: {
    margin: '0',
    variants: {
      variant: {
        ...textStyles,
      },
      align: {
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        right: { textAlign: 'right' },
      },
    },
  },
});
