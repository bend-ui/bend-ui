import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  children?: ReactNode;
  containerRef?: HTMLDivElement;
}

export const Portal = (props: PortalProps) => {
  const { children, containerRef } = props;
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
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

  return createPortal(children, ref.current);
};
