import { keyframes } from '@stitches/react';
import { createStyles } from '../../styles';

const skeletonAnimation = keyframes({
  'from, to': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

export default createStyles({
  root: {
    width: '100%',
    height: '$2xs',
    borderRadius: '$3xl',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgb(26, 27, 30)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgb(55, 58, 64)',
      animation: `2500ms linear 0s infinite normal none running ${skeletonAnimation}`,
    },
  },
});
