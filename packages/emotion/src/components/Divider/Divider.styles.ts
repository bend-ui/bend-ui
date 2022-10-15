import { createStyles } from '../../styles';

export default createStyles({
  root: {
    my: '$lg',
    variants: {
      withContent: {
        false: {
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: '$outline',
        },
        true: {
          display: 'flex',
          alignItems: 'center',
          gap: '$sm',
          '&::before': {
            flex: '1',
            content: '""',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '$outline',
          },
          '&::after': {
            flex: '1',
            content: '""',
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: '$outline',
          },
        },
      },
      labelPosition: {
        start: {
          '&::before': {
            flex: '0',
          },
        },
        center: {},
        end: {
          '&::after': {
            flex: '0',
          },
        },
      },
    },
  },
});
