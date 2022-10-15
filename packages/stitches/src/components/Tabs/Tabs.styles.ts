import { createStyles } from '../../styles';

export default createStyles({
  root: {
    '[role="tablist"]': {
      display: 'flex',
      borderBottom: '1px solid $neutral300',
    },
    '[role="tab"]': {
      backgroundColor: 'unset',
      border: 'unset',
      py: '$sm',
      '&:hover': {
        color: '$blue800',
        backgroundColor: '$blue100',
      },
      '&[aria-selected="true"]': {
        fontWeight: '$bold',
        borderBottom: '2px solid $primary',
      },
    },
    '[role="tabpanel"]': {},
  },
});
