import { defineConfig } from '@pandacss/dev';
import type { Config } from '@pandacss/dev';
import { createBendPreset } from '@bend-ui/preset';
import { bendHooks } from './bend-hooks';
import { composeHooks } from './compose-hooks';

const BEND_DEFAULTS = {
  preflight: true,
  jsxFramework: 'react',
  importMap: '@bend-ui/styled-system',
  lightningcss: true,
} as const;

/**
 * Sugar over Panda's `defineConfig()`: installs the Bend preset via
 * `createBendPreset()`, applies sensible defaults, and composes the
 * consumer's hooks alongside Bend's own rather than replacing them.
 *
 * `defineConfig()` remains usable directly for consumers who want explicit
 * control over every option.
 */
export function createBendConfig(config: Config = {}): Config {
  const { hooks, presets = [], ...rest } = config;

  return defineConfig({
    ...BEND_DEFAULTS,
    ...rest,
    presets: [createBendPreset(), ...presets],
    hooks: composeHooks(bendHooks, hooks),
  });
}
