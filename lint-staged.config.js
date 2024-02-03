module.exports = {
  'packages/**/*.{ts, tsx, js, jsx}': [
    'pnpm exec nx affected:lint --fix --files',
    // 'nx affected --target test --uncommitted',
    // 'nx format:write --uncommitted',
  ],
  '*': ['pnpm exec nx format:write --files'],
};
