import React from 'react';

export const createContext = <T extends object>(
  name: string,
  defaultContext?: T
) => {
  const Context = React.createContext<T | undefined>(defaultContext);

  Context.displayName = name;

  const useContext = () => {
    const context = React.useContext(Context);
    return context;
  };

  return [Context.Provider, useContext] as const;
};
