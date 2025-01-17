// Types

export type AnyFunction<T = any> = (...args: T[]) => any;

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export type Dict<T = any> = Record<string, T>;

export type Booleanish = boolean | 'true' | 'false';
export type StringOrNumber = string | number;

// Assertions

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = <T extends Function = Function>(
  value: any,
): value is T => typeof value === 'function';

// Helpers Functions

export const runIfFn = <T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
) => (isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn);

export const callAllHandlers =
  <T extends (event: any) => void>(...fns: T[]) =>
  (event: FunctionArguments<T>[0]) => {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };

export const callAll =
  <T extends AnyFunction>(...fns: T[]) =>
  (arg: FunctionArguments<T>[0]) => {
    fns.forEach((fn) => fn?.(arg));
  };

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};
