import { defineThemePersonality } from './contract';

export const voltPersonality = defineThemePersonality({
  id: 'volt',
  name: 'Volt',
  description: 'Hacker-minded, cybernetic, compact, and energetic.',
  primary: 'lime-spark',
  secondary: 'graphite',
  lightColor: 'lime-spark',
  darkColor: 'graphite',
  primaryStates: {
    default: '500',
    hover: '400',
    active: '300',
    focus: '400',
  },
  secondaryShade: '700',
  onPrimary: { color: 'graphite', shade: '950' },
  typography: {
    heading:
      'var(--font-volt-heading, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    body: 'var(--font-volt-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
    code: 'var(--font-volt-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.04em',
  },
  shape: {
    control: '2px',
    surface: '4px',
    overlay: '6px',
    borderWidth: '1px',
  },
  elevation: {
    surface: '0 0 0 1px {colors.primary.700}',
    raised:
      '0 0 0 1px {colors.primary.600}, 0 0 20px oklch(0.918 0.23 128.271 / 0.18)',
    overlay:
      '0 0 0 1px {colors.primary.500}, 0 0 36px oklch(0.918 0.23 128.271 / 0.24)',
  },
  density: {
    controlHeights: { sm: '28px', md: '36px', lg: '44px' },
    spacing: { xs: '2px', sm: '6px', md: '10px', lg: '16px' },
  },
  motion: {
    character: 'Immediate, linear, and crisp.',
    duration: { fast: '80ms', normal: '120ms', slow: '180ms' },
    easing: {
      default: 'cubic-bezier(0.2, 0, 0, 1)',
      enter: 'cubic-bezier(0, 0, 0.2, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
