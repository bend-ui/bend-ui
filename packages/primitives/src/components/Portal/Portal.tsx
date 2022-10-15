import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children?: React.ReactNode;
  containerRef?: HTMLDivElement;
}

export const Portal = (props: PortalProps) => {
  const { children, containerRef } = props;
  const [mounted, setMounted] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    setMounted(true);
    ref.current = containerRef || document.createElement('div');

    if (!containerRef) {
      document.body.appendChild(ref.current);
    }

    return () => {
      !containerRef && document.body.removeChild(ref.current);
    };
  }, [containerRef]);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(children, ref.current);
};
