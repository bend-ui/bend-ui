import { useEffect, useState } from 'react';
import type { UseImageProps } from './types';

type Status = 'idle' | 'error' | 'loading' | 'loaded';

export const useImage = (props: UseImageProps) => {
  const { src } = props;

  const [loadingStatus, setLoadingStatus] = useState<Status>('idle');

  useEffect(() => {
    if (!src) {
      setLoadingStatus('error');
      return undefined;
    }

    let isMounted = true;

    const image = new window.Image();

    const updateStatus = (status: Status) => {
      if (!isMounted) return;
      setLoadingStatus(status);
    };

    setLoadingStatus('loading');
    image.onload = () => updateStatus('loaded');
    image.onerror = () => updateStatus('error');
    image.src = src;

    return () => {
      isMounted = false;
    };
  }, [src]);

  return { status: loadingStatus };
};
