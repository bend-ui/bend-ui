import { createComponent } from '../../utils';
import { visuallyHiddenStyle } from './VisuallyHidden.styles';
import type { ReactNode } from 'react';

type VisuallyHiddenProps = {
  children?: ReactNode;
};

const VisuallyHidden = (props: VisuallyHiddenProps) => {
  const { children } = props;
  return <div style={visuallyHiddenStyle}>{children}</div>;
};

export default createComponent(VisuallyHidden, {}, 'VisuallyHidden');
