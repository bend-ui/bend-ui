import { createStyles } from '../../styles';

export default createStyles(() => ({
  panel: {
    width: '50vw',
    height: '100%',
    color: '$on-surface',
    backgroundColor: '$surface',
  },
  backdrop: {
    position: 'fixed',
    inset: '0',
    display: 'grid',
    placeItems: 'start',
    background: 'rgba(25, 25, 25, 0.8)',
    zIndex: 100,
  },
}));
