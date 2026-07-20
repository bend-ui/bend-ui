import { defineTokens } from '@pandacss/dev';

export const fonts = defineTokens.fonts({
  sans: {
    value: 'var(--font-sans, "Inter Variable", system-ui, sans-serif)',
  },
  body: {
    value: 'var(--font-body, "Inter Variable", system-ui, sans-serif)',
  },
  heading: {
    value: 'var(--font-heading, "Inter Variable", system-ui, sans-serif)',
  },
  code: {
    value: 'var(--font-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
  },
  serif: {
    value: 'var(--font-serif, Georgia, serif)',
  },
  mono: {
    value: 'var(--font-mono, ui-monospace, "SFMono-Regular", Consolas, monospace)',
  },
});
