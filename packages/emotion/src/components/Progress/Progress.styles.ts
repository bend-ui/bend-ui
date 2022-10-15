import { createStyles } from '../../styles';

export default createStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    height: '1rem',
    backgroundColor: '$neutral',
    borderRadius: '$full',
  },
  bar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    backgroundColor: '$primary',
    borderRadius: '$full',
    transition: 'width 200ms linear',
  },
});
