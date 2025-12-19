'use client';

import { useState } from 'react';

export const useId = (id?: string) => {
  const [uid] = useState<string>(() => {
    if (id) return id;
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  });

  return uid;
};
