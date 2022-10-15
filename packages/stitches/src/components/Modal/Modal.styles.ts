import { createStyles } from '../../styles';

export default createStyles({
  root: {
    p: 0,
  },
  backdrop: {
    position: 'fixed',
    inset: '0',
    display: 'grid',
    placeItems: 'center',
    background: 'rgba(25, 25, 25, 0.8)',
  },
});
