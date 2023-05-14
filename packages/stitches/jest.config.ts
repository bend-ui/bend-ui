/* eslint-disable */
export default {
  displayName: 'stitches',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/stitches',
  preset: '../../jest.preset.js',
};
