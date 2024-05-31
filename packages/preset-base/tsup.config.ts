import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/preset.ts'],
  tsconfig: 'tsconfig.lib.json',
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
});
