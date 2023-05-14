import type { Config } from 'jest';

export default {
  displayName: 'styled-components',

  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/styled-components',
  preset: '../../jest.preset.js',
} as Config;
