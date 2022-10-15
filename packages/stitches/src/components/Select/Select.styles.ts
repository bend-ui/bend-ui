import { createStyles } from '../../styles';

export default createStyles({
  trigger: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$md',
    py: '$xs',
    px: '$sm',
    color: '$on-surface',
    background: '$surface',
    border: '1px solid $outline',
    borderRadius: '$md',
    boxShadow: '$sm',
    outline: 'none',
    '&:focus': {
      borderColor: '$blue600',
      focusRing: '$focusRing',
    },
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '$white',
    boxShadow: '$md',
    borderRadius: '$md',
  },
});
