module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {
      cwd: __dirname,
      configPath: 'panda.config.ts',
    },
  },
};
