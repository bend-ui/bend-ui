import { createStyles } from '../../styles';

export default createStyles({
  menu: {},
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    maxHeight: '320px',
    backgroundColor: '$surface',
    borderRadius: '$lg',
    boxShadow: '$md',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$outline',
  },
  item: {
    all: 'unset',
    py: '$md',
    px: '$lg',
    '&:hover': {
      backgroundColor: '$neutral-subtle',
    },
  },
});
