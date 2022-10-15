import { createStyles } from '../../styles';

export default createStyles({
  root: {},
  list: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '160px',
  },
  item: {
    color: '$on-surface',
    background: 'unset',
    border: 'unset',
    textAlign: 'left',
    px: '$md',
    py: '$sm',
    borderRadius: '$lg',
    '&:hover': {
      backgroundColor: '$surface-hover',
    },
  },
});
