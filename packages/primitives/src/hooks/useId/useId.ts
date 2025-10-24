'use client';

import { useState } from 'react';

export const useId = (id?: string) => {
  function generateUniqueId(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  const [uid] = useState<string>(id || generateUniqueId());

  return uid;
};
