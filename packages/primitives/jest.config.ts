import type { Config } from 'jest';

export default {
  displayName: 'primitives',
  testPathIgnorePatterns: ['<rootDir>/templates/*'],
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/primitives',
  preset: '../../jest.preset.js',
} as Config;
