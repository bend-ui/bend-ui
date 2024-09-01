import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.lib.json',
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
});
