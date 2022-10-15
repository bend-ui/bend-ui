import { createStyles } from '../../styles';

export default createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  control: {
    position: 'relative',
    display: 'inline-flex',
  },
  input: {
    appearance: 'none',
    display: 'block',
    size: '$xs',
    backgroundColor: '$neutral',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$outline',
    borderRadius: '$md',
    '&:checked': {
      backgroundColor: '$primary',
      borderColor: '$primary',
      '& + svg': {
        opacity: '1',
        transform: 'translateY(0) scale(1)',
      },
    },
  },
  icon: {
    position: 'absolute',
    inset: '0',
    zIndex: '1',
    margin: 'auto',
    opacity: '0',
    color: '$on-primary',
    pointerEvents: 'none',
  },
  label: {
    WebkitTapHighlightColor: 'transparent',
    pl: '$xs',
  },
});
