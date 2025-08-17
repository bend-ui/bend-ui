import { createContext as createReactContext, useContext } from 'react';

export function createContext<ContextValue>(name: string) {
  const Context = createReactContext<ContextValue | undefined>(undefined);

  function useContextValue() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(
        `${name} context is undefined. Ensure it is used within a provider.`,
      );
    }
    return context;
  }

  return [Context.Provider, useContextValue] as const;
}
