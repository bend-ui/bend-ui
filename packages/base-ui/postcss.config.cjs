module.exports = {
  plugins: [
    require('@pandacss/dev/postcss')({
      configPath: 'packages/base-ui/panda.config.ts',
    }),
  ],
};
