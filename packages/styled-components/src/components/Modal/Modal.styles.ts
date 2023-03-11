import { createStyles } from '../../styles';
import type { CSSObject } from 'system-props';

const wrapperStyles: CSSObject = {
  // position: 'absolute',
  // inset: '0',
  // overflow: 'auto',
};

const overlayStyles: CSSObject = {
  position: 'fixed',
  inset: 0,
  bg: '$gray500',
  opacity: '0.75',
};

const rootStyles: CSSObject = {
  position: 'absolute',
  top: '2rem',
  left: '50vw',
  transform: 'translateX(-50%)',
  bg: '$white',
  borderRadius: '$md',
  boxShadow: '$md',
};

export default createStyles(() => ({
  wrapper: wrapperStyles,
  root: rootStyles,
  overlay: overlayStyles,
}));
