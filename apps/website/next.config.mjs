import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { createMDX } from 'fumadocs-mdx/next';

const projectDirectory = fileURLToPath(new URL('.', import.meta.url));
const referenceInputs = [
  '../../packages/preset/src',
  '../../packages/preset-base/src',
  '../../packages/base-ui/src',
  'styled-system',
  'scripts/generate-reference.ts',
  'lib/generated-reference/api-types.ts',
  'tsconfig.json',
  '../../tsconfig.base.json',
  '../../pnpm-lock.yaml',
].map((input) => path.resolve(projectDirectory, input));
let referenceFingerprint;
function getReferenceFingerprint() {
  const hash = createHash('sha256');
  function add(entry) {
    if (!existsSync(entry)) return;
    const children = readdirSync(entry, {
      withFileTypes: true,
      recursive: false,
    });
    for (const child of children.sort((a, b) => a.name.localeCompare(b.name))) {
      const name = path.join(entry, child.name);
      if (child.isDirectory()) add(name);
      else if (child.isFile()) {
        hash.update(name);
        hash.update(readFileSync(name));
      }
    }
  }
  for (const input of referenceInputs) {
    if (!existsSync(input)) continue;
    try {
      add(input);
    } catch (error) {
      if (error.code !== 'ENOTDIR') throw error;
      hash.update(input);
      hash.update(readFileSync(input));
    }
  }
  return hash.digest('hex');
}

export default function nextConfig(phase) {
  const development =
    phase === PHASE_DEVELOPMENT_SERVER ||
    process.env.NX_TASK_TARGET_CONFIGURATION === 'development';
  const exporting = process.env.BEND_NEXT_EXPORT === 'true';
  const config = {
    reactStrictMode: true,
    webpack(config) {
      if (development) {
        config.plugins.push({
          apply(compiler) {
            compiler.hooks.watchRun.tap('GeneratedReference', () => {
              const fingerprint = getReferenceFingerprint();
              if (
                fingerprint === referenceFingerprint &&
                existsSync(
                  path.resolve(
                    projectDirectory,
                    'lib/generated-reference/data.json',
                  ),
                )
              )
                return;
              execFileSync(
                process.execPath,
                ['--import', 'tsx', 'scripts/generate-reference.ts'],
                { cwd: projectDirectory },
              );
              referenceFingerprint = fingerprint;
              console.info('Generated reference refreshed');
            });
            compiler.hooks.afterCompile.tap(
              'GeneratedReference',
              (compilation) => {
                for (const dir of ['preset', 'preset-base', 'base-ui'])
                  compilation.contextDependencies.add(
                    path.resolve(projectDirectory, `../../packages/${dir}/src`),
                  );
                compilation.contextDependencies.add(
                  path.resolve(projectDirectory, 'styled-system'),
                );
                compilation.fileDependencies.add(
                  path.resolve(
                    projectDirectory,
                    'scripts/generate-reference.ts',
                  ),
                );
                compilation.fileDependencies.add(
                  path.resolve(
                    projectDirectory,
                    'lib/generated-reference/api-types.ts',
                  ),
                );
                for (const input of [
                  'tsconfig.json',
                  '../../tsconfig.base.json',
                  '../../pnpm-lock.yaml',
                ])
                  compilation.fileDependencies.add(
                    path.resolve(projectDirectory, input),
                  );
              },
            );
          },
        });
      }
      config.resolve.extensionAlias = {
        ...config.resolve.extensionAlias,
        '.js': ['.ts', '.tsx', '.js', '.jsx'],
        '.mjs': ['.mts', '.mjs'],
        '.cjs': ['.cts', '.cjs'],
        '.jsx': ['.tsx', '.jsx'],
      };
      return config;
    },
    distDir: exporting
      ? '../../dist/apps/website/export'
      : development
        ? '.next'
        : '../../dist/apps/website/.next',
    ...(exporting ? { output: 'export' } : {}),
    transpilePackages: [
      '@bend-ui/base-ui',
      '@bend-ui/preset',
      '@bend-ui/preset-base',
      '@bend-ui/react-utils',
      '@bend-ui/styled-system',
    ],
  };

  // Nx reads this config from the workspace root to infer outputs. Generate MDX
  // only when Next runs from the app directory, where its content paths resolve.
  return path.resolve(process.cwd()) === path.resolve(projectDirectory)
    ? createMDX()(config)
    : config;
}
