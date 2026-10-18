import { defineConfig } from '@pandacss/dev';
import type { Config } from '@pandacss/dev';
import type { PandaHooks } from '@pandacss/types';
import { createBendPreset } from '@bend-ui/preset';
import { bendHooks } from './bend-hooks';
import { composeHooks } from './compose-hooks';

const BEND_DEFAULTS = {
  preflight: true,
  jsxFramework: 'react',
  importMap: '@bend-ui/styled-system',
} as const;

/**
 * Sugar over Panda's `defineConfig()`: installs the Bend preset via
 * `createBendPreset()`, applies sensible defaults, and composes the
 * consumer's hooks alongside Bend's own rather than replacing them.
 *
 * `defineConfig()` remains usable directly for consumers who want explicit
 * control over every option.
 */
export interface BendConfig extends Config {
  /** @deprecated Prefer named Panda plugins. Only v2-supported hooks are accepted. */
  hooks?: Partial<PandaHooks>;
}

export function createBendConfig(config: BendConfig = {}): Config {
  const { hooks, plugins = [], presets = [], ...rest } = config;

  return defineConfig({
    ...BEND_DEFAULTS,
    ...rest,
    presets: [createBendPreset(), ...presets],
    plugins: [
      { name: 'bend-ui', hooks: composeHooks(bendHooks, hooks) },
      ...plugins,
    ],
  });
}
