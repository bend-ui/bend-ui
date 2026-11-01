import { defineConfig } from '@pandacss/dev';
import base from './panda.config';

// Exercise Bend defaults, without the base scenario's consumer fill override.
export default defineConfig({
  ...base,
  theme: {},
  staticCss: { themes: ['default', 'proton'] },
});
