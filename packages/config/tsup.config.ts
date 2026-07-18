import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  platform: 'browser',
  format: ['cjs', 'esm'],
  target: 'es2020',
  skipNodeModulesBundle: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  keepNames: true,
  // `@bend-ui/preset` resolves via tsconfig path mapping to its source file,
  // which sits outside this package's directory; widen rootDir so the dts
  // build doesn't reject it as out-of-project (see packages/preset-base's
  // identical override).
  dts: {
    compilerOptions: {
      rootDir: '../../',
    },
  },
  treeshake: true,
  bundle: true,
  outDir: 'dist',
});
