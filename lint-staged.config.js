module.exports = {
  '{packages}/**/*.{ts, tsx, js, jsx}': [
    'nx affected --target lint --uncommited --fix true',
    'nx affected --target test --uncommited',
    'nx format:write --uncommited',
  ],
};
