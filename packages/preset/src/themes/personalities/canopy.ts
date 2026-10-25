import { defineThemePersonality } from './contract';

export const canopyPersonality = defineThemePersonality({
  id: 'canopy',
  name: 'Canopy',
  description: 'Premium, organic, editorial, and timeless.',
  primary: 'emerald-ink',
  secondary: 'champagne',
  lightColor: 'champagne',
  darkColor: 'emerald-ink',
  primaryStates: {
    default: '500',
    hover: '600',
    active: '700',
    focus: '700',
  },
  secondaryShade: '50',
  onPrimary: { color: 'champagne', shade: '50' },
  typography: {
    heading:
      'var(--font-canopy-heading, Iowan Old Style, Baskerville, "Times New Roman", serif)',
    body: 'var(--font-canopy-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
    code: 'var(--font-canopy-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.015em',
  },
  shape: {
    control: '4px',
    surface: '8px',
    overlay: '12px',
    borderWidth: '1px',
  },
  elevation: {
    surface: '0 0 0 1px {colors.neutral.200}',
    raised:
      '0 1px 2px oklch(0.378 0.073 168.94 / 0.12), 0 12px 32px -20px oklch(0.378 0.073 168.94 / 0.28)',
    overlay:
      '0 2px 4px oklch(0.378 0.073 168.94 / 0.14), 0 28px 64px -24px oklch(0.378 0.073 168.94 / 0.34)',
  },
  density: {
    controlHeights: { sm: '34px', md: '42px', lg: '50px' },
    spacing: { xs: '4px', sm: '8px', md: '14px', lg: '24px' },
  },
  motion: {
    character: 'Restrained, calm, and deliberate.',
    duration: { fast: '180ms', normal: '280ms', slow: '420ms' },
    easing: {
      default: 'cubic-bezier(0.22, 1, 0.36, 1)',
      enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
