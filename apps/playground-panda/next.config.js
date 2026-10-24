//@ts-check
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @param {string} phase @returns {import('next').NextConfig} */
module.exports = function nextConfig(phase) {
  const development =
    phase === PHASE_DEVELOPMENT_SERVER ||
    process.env.NX_TASK_TARGET_CONFIGURATION === 'development';
  const exporting = process.env.BEND_NEXT_EXPORT === 'true';
  return {
    distDir: exporting
      ? '../../dist/apps/playground-panda/export'
      : development
        ? '.next'
        : '../../dist/apps/playground-panda/.next',
    ...(exporting ? { output: 'export' } : {}),
    transpilePackages: [
      '@bend-ui/ark-ui',
      '@bend-ui/preset',
      '@bend-ui/preset-base',
      '@bend-ui/react-utils',
      '@bend-ui/styled-system',
    ],
  };
};
