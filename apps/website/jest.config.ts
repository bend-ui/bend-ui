/* eslint-disable */
export default {
  displayName: 'website',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(mjs|js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.(mjs|js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleNameMapper: {
    '^@bend-ui/base-ui$': '<rootDir>/../../packages/base-ui/src/index.ts',
    '^@bend-ui/core$': '<rootDir>/../../packages/core/src/index.ts',
    '^@bend-ui/styled-system/(.*)$': '<rootDir>/styled-system/$1/index.mjs',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/website',
};
