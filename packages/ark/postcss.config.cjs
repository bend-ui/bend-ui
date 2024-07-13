module.exports = {
  plugins: [
    require('@pandacss/dev/postcss')({
      configPath: 'packages/ark/panda.config.ts',
    }),
  ],
};
