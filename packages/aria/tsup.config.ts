import { defineConfig } from 'tsup';

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      rootDir: '../../',
    },
  },
  outDir: 'dist',
  clean: true,
  tsconfig: 'tsconfig.lib.json',
});
