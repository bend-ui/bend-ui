import type { PandaHooks } from '@pandacss/types';

type HookFn = (...args: unknown[]) => unknown;

/**
 * Panda only auto-merges hooks declared via `plugins` or the top-level
 * config's own `hooks` field — it does not compose a `hooks` field carried by
 * a preset with the consumer config's `hooks`. Some hooks are called
 * synchronously by Panda's pipeline (e.g. `cssgen:done` feeds its return
 * value straight into `css = hook(...) ?? css` with no `await`), so those
 * must stay sync here too instead of being wrapped in an async function.
 */
const SYNC_HOOK_KEYS: Array<keyof PandaHooks> = [
  'context:created',
  'parser:before',
  'parser:preprocess',
  'parser:after',
  'cssgen:done',
  'css:optimize',
];

function composeHookFn(key: keyof PandaHooks, base: HookFn, override: HookFn): HookFn {
  if (SYNC_HOOK_KEYS.includes(key)) {
    return (...args: unknown[]) => {
      const baseResult = base(...args);
      const overrideResult = override(...args);
      return overrideResult ?? baseResult;
    };
  }

  return async (...args: unknown[]) => {
    const baseResult = await base(...args);
    const overrideResult = await override(...args);
    return overrideResult ?? baseResult;
  };
}

/**
 * Composes two Panda hook sets so every hook defined by either side runs,
 * instead of the second silently replacing the first. When both sides
 * define the same hook key, both run (base first, then override); for hooks
 * that return a value, the override's return value wins when defined,
 * otherwise the base's.
 */
export function composeHooks(
  base: Partial<PandaHooks> = {},
  override: Partial<PandaHooks> = {},
): Partial<PandaHooks> {
  const keys = new Set([...Object.keys(base), ...Object.keys(override)]) as Set<keyof PandaHooks>;
  const composed: Record<string, HookFn> = {};

  for (const key of keys) {
    const baseFn = base[key] as HookFn | undefined;
    const overrideFn = override[key] as HookFn | undefined;

    if (baseFn && overrideFn) {
      composed[key] = composeHookFn(key, baseFn, overrideFn);
    } else if (overrideFn ?? baseFn) {
      composed[key] = (overrideFn ?? baseFn) as HookFn;
    }
  }

  return composed as Partial<PandaHooks>;
}
