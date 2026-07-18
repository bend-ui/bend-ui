import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  external: ['@bend-ui/preset'],
  platform: 'browser',
  format: ['cjs', 'esm'],
  target: 'es2020',
  skipNodeModulesBundle: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  keepNames: true,
  dts: {
    compilerOptions: {
      rootDir: '../../',
    },
  },
  treeshake: true,
  bundle: true,
  outDir: 'dist',
});
