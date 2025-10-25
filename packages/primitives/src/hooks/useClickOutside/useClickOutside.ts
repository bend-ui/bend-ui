'use client';

import { useEffect, useRef } from 'react';
import type React from 'react';

export const useClickOutside = <T extends HTMLElement>(
  handler: () => void,
): React.Ref<T> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const listener = (event: any) => {
      !ref.current?.contains(event.target) && handler();
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [handler]);

  return ref;
};
