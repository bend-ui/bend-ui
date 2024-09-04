import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  tsconfig: 'tsconfig.lib.json',
  clean: true,
  dts: {
    compilerOptions: {
      rootDir: '../../',
    },
  },
  format: ['esm', 'cjs'],
});
