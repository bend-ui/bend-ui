import {
  createContext as createReactContext,
  useContext as useReactContext,
} from 'react';

/**
 * Utility to create a context
 *
 * @param name The name of the context
 * @param defaultContext The default value of the context
 * @returns Provider and useContext
 */

export const createContext = <T extends object>(
  name: string,
  defaultContext?: T
) => {
  const Context = createReactContext<T | undefined>(defaultContext);

  Context.displayName = name;

  const useContext = () => {
    const context = useReactContext(Context);
    return context;
  };

  return [Context.Provider, useContext] as const;
};
