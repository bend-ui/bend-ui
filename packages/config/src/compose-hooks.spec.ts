import { describe, it, expect, vi } from 'vitest';
import { composeHooks } from './compose-hooks';

/**
 * Seam B — config builder unit tests.
 *
 * Panda only auto-merges hooks declared via `plugins` or the top-level
 * config's own `hooks` field; it does not compose a `hooks` field carried by
 * a preset with the consumer config's `hooks`. `composeHooks()` is the
 * plumbing `createBendConfig()` uses to guarantee Bend's hooks and the
 * consumer's hooks both run instead of one silently replacing the other.
 */

describe('composeHooks', () => {
  it('runs both sides when both define the same sync hook key', () => {
    const base = vi.fn();
    const override = vi.fn();

    const composed = composeHooks({ 'cssgen:done': base }, { 'cssgen:done': override });
    composed['cssgen:done']?.({ artifact: 'global', content: 'a' });

    expect(base).toHaveBeenCalledTimes(1);
    expect(override).toHaveBeenCalledTimes(1);
  });

  it('runs both sides when both define the same async hook key', async () => {
    const base = vi.fn(async () => undefined);
    const override = vi.fn(async () => undefined);

    const composed = composeHooks({ 'config:resolved': base }, { 'config:resolved': override });
    await composed['config:resolved']?.({
      config: {},
      path: '',
      dependencies: [],
      utils: { omit: (o) => o, pick: (o) => o, traverse: () => undefined },
    });

    expect(base).toHaveBeenCalledTimes(1);
    expect(override).toHaveBeenCalledTimes(1);
  });

  it('prefers the override return value over the base when both are defined', () => {
    const base = vi.fn(() => 'base-css');
    const override = vi.fn(() => 'override-css');

    const composed = composeHooks({ 'cssgen:done': base }, { 'cssgen:done': override });
    const result = composed['cssgen:done']?.({ artifact: 'global', content: 'a' });

    expect(result).toBe('override-css');
  });

  it('falls back to the base return value when the override returns nothing', () => {
    const base = vi.fn(() => 'base-css');
    const override = vi.fn(() => undefined);

    const composed = composeHooks({ 'cssgen:done': base }, { 'cssgen:done': override });
    const result = composed['cssgen:done']?.({ artifact: 'global', content: 'a' });

    expect(base).toHaveBeenCalledTimes(1);
    expect(override).toHaveBeenCalledTimes(1);
    expect(result).toBe('base-css');
  });

  it('passes a hook key defined only on one side through unchanged', () => {
    const baseOnly = vi.fn();
    const overrideOnly = vi.fn();

    const composed = composeHooks(
      { 'cssgen:done': baseOnly },
      { 'css:optimize': overrideOnly },
    );

    expect(composed['cssgen:done']).toBe(baseOnly);
    expect(composed['css:optimize']).toBe(overrideOnly);
  });

  it('is callable with no arguments and returns an empty hook set', () => {
    expect(composeHooks()).toEqual({});
  });
});
