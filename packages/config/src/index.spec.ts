import { describe, it, expect, vi } from 'vitest';
import { definePreset } from '@pandacss/dev';
import * as composeHooksModule from './compose-hooks';
import { createBendConfig } from './index';

/**
 * Seam B — config builder unit tests.
 *
 * These assert `createBendConfig()`'s public contract: it installs the Bend
 * preset, applies sensible defaults a consumer can still override, and
 * composes the consumer's Panda hooks alongside Bend's own rather than
 * clobbering them (see `compose-hooks.spec.ts` for the composition mechanism
 * itself).
 */

describe('createBendConfig', () => {
  it('is callable with no arguments', () => {
    expect(() => createBendConfig()).not.toThrow();
  });

  it('installs the Bend preset as the first preset', () => {
    const config = createBendConfig();

    expect(config.presets?.[0]).toMatchObject({ name: 'bend-ui' });
  });

  it('applies sensible defaults', () => {
    const config = createBendConfig();

    expect(config.preflight).toBe(true);
    expect(config.jsxFramework).toBe('react');
    expect(config.importMap).toBe('@bend-ui/styled-system');
  });

  it('lets a consumer override a default', () => {
    const config = createBendConfig({ preflight: false });

    expect(config.preflight).toBe(false);
  });

  it('appends consumer-supplied presets after the Bend preset', () => {
    const consumerPreset = definePreset({ name: 'consumer' });
    const config = createBendConfig({ presets: [consumerPreset] });

    expect(config.presets?.[0]).toMatchObject({ name: 'bend-ui' });
    expect(config.presets).toContain(consumerPreset);
  });

  it("composes the consumer's hooks without clobbering them", () => {
    const consumerHook = vi.fn(() => 'consumer-css');
    const config = createBendConfig({ hooks: { 'cssgen:done': consumerHook } });

    const result = config.hooks?.['cssgen:done']?.({ artifact: 'global', content: 'a' });

    expect(consumerHook).toHaveBeenCalledTimes(1);
    expect(result).toBe('consumer-css');
  });

  it("delegates to composeHooks() so Bend's hook set and the consumer's hooks are composed, not replaced", () => {
    const composeHooksSpy = vi.spyOn(composeHooksModule, 'composeHooks');
    const consumerHooks = { 'cssgen:done': vi.fn() };

    const config = createBendConfig({ hooks: consumerHooks });

    expect(composeHooksSpy).toHaveBeenCalledWith(expect.any(Object), consumerHooks);
    expect(config.hooks).toBe(composeHooksSpy.mock.results[0]?.value);

    composeHooksSpy.mockRestore();
  });
});
