import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    m: 0,
    p: 0,
    listStyle: 'none',
    gap: '$xs',
    variants: {
      orientation: {
        vertical: {
          flexDirection: 'column',
          alignItems: 'stretch',
        },
      },
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
      },
    },
  },
});
