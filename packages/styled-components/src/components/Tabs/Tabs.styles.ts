import { createStyles } from '../../styles';

export default createStyles((props) => ({
  root: {
    background: 'none',
    border: 'none',
    color: '$gray600',
    py: '$md',
    px: '$xl',
  },
  list: {
    display: 'flex',
  },
  tab: {
    all: 'unset',
    flex: props.isFitted ? '1 1 auto' : '0 1 auto',
    '&:hover': {
      color: '$blue500',
    },
    '&[aria-selected="true"]': {
      color: '$blue500',
      borderBottomColor: '$blue500',
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
    },
  },
  panel: {},
}));
