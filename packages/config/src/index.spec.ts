import { loadConfig } from '@pandacss/dev/node';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, expect, vi } from 'vitest';
import { definePreset } from '@pandacss/dev';
import { bendHooks } from './bend-hooks';
import * as composeHooksModule from './compose-hooks';
import { createBendConfig } from './index';

const { bendHook } = vi.hoisted(() => ({
  bendHook: vi.fn(() => 'bend-css'),
}));

vi.mock('./bend-hooks', () => ({
  bendHooks: { 'cssgen:done': bendHook },
}));

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

  it("runs Bend's hooks alongside the consumer's without clobbering either", () => {
    const consumerHook = vi.fn(() => 'consumer-css');
    const config = createBendConfig({ hooks: { 'cssgen:done': consumerHook } });

    const result = config.plugins?.[0]?.hooks?.['cssgen:done']?.({
      artifact: 'styles.css',
      content: 'a',
    });

    expect(bendHook).toHaveBeenCalledTimes(1);
    expect(consumerHook).toHaveBeenCalledTimes(1);
    expect(result).toBe('consumer-css');
  });

  it("delegates to composeHooks() so Bend's hook set and the consumer's hooks are composed, not replaced", () => {
    const composeHooksSpy = vi.spyOn(composeHooksModule, 'composeHooks');
    const consumerHooks = { 'cssgen:done': vi.fn() };

    const config = createBendConfig({ hooks: consumerHooks });

    expect(composeHooksSpy).toHaveBeenCalledWith(bendHooks, consumerHooks);
    expect(config.plugins?.[0]?.hooks).toBe(
      composeHooksSpy.mock.results[0]?.value,
    );

    composeHooksSpy.mockRestore();
  });
});

describe('native Panda v2 plugin integration', () => {
  it('runs compatibility hooks before consumer plugins in the real config loader', async () => {
    const directory = mkdtempSync(join(tmpdir(), 'bend-panda-hooks-'));
    const source = fileURLToPath(new URL('./index.ts', import.meta.url));
    const file = join(directory, 'panda.config.mjs');
    try {
      writeFileSync(
        file,
        `
        import { createBendConfig } from ${JSON.stringify(source)};
        export default createBendConfig({
          hooks: { 'config:resolved': async ({ config }) => ({ ...config, prefix: 'bend-hook' }) },
          plugins: [{ name: 'consumer', hooks: {
            'config:resolved': ({ config }) => {
              if (config.prefix !== 'bend-hook') throw new Error('Bend hook did not run first');
              return { ...config, prefix: 'consumer-hook' };
            }
          }}]
        });
      `,
      );
      const snapshot = await loadConfig({ cwd: process.cwd(), file });
      expect(snapshot.config.prefix).toBe('consumer-hook');
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
