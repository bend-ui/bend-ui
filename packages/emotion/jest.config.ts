/* eslint-disable */
export default {
  displayName: 'emotion',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/emotion',
  preset: '../../jest.preset.js',
};
