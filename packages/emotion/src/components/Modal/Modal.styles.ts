import { createStyles } from '../../styles';

export default createStyles({
  modal: {
    maxWidth: '480px',
    p: '$lg',
    backgroundColor: '$surface',
    borderRadius: '$md',
    boxShadow: '$md',
  },
  overlay: {
    zIndex: '100',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'rgba(25, 25, 25, 0.8)',
  },
});
