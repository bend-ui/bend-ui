import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { createMDX } from 'fumadocs-mdx/next';

const projectDirectory = fileURLToPath(new URL('.', import.meta.url));

export default function nextConfig(phase) {
  const development =
    phase === PHASE_DEVELOPMENT_SERVER ||
    process.env.NX_TASK_TARGET_CONFIGURATION === 'development';
  const exporting = process.env.BEND_NEXT_EXPORT === 'true';
  const config = {
    reactStrictMode: true,
    webpack(config) {
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
