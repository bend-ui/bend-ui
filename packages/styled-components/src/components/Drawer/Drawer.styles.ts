import { createStyles } from '../../styles';

export default createStyles({
  root: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    width: '320px',
    bg: '$white',
    boxShadow: '$md',
  },
  wrapper: { position: 'absolute', inset: '0', overflow: 'auto' },
  overlay: { position: 'fixed', inset: 0, bg: '$gray500', opacity: '0.75' },
});
