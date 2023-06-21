import { join } from 'path';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(
      __dirname,
      '../../packages/tailwind/src/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          fg: 'var(--primary-fg)',
        },
        canvas: {
          DEFAULT: 'var(--canvas)',
          fg: 'var(--canvas-fg)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          fg: 'var(--canvas-fg)',
        },
        border: {
          DEFAULT: 'var(--border)',
        },
      },
    },
  },
} satisfies Config;
