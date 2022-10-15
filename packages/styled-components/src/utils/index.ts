// Function assertions

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = <T extends Function = Function>(
  value: any
): value is T => typeof value === 'function';

export const runIfFn = <T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T => (isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn);
