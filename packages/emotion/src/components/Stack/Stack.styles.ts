import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$md',
    variants: {
      align: {
        start: {
          alignItems: 'flex-start',
        },
        center: {
          alignItems: 'center',
        },
        end: {
          alignItems: 'flex-end',
        },
        stretch: {
          alignItems: 'stretch',
        },
      },
    },
  },
});
