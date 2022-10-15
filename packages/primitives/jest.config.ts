/* eslint-disable */
export default {
  displayName: 'primitives',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/primitives',
  preset: '../../jest.preset.js',
};
