/* eslint-disable */
export default {
  displayName: 'vanilla-extract',

  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vanilla-extract',
  preset: '../../jest.preset.js',
};
