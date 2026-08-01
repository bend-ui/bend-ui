import { defineThemePersonality } from './contract';

export const stratusPersonality = defineThemePersonality({
  id: 'stratus',
  name: 'Stratus',
  description: 'Clean, technical, calm, and trustworthy.',
  primary: 'signal-blue',
  secondary: 'porcelain',
  lightColor: 'porcelain',
  darkColor: 'signal-blue',
  primaryStates: {
    default: '500',
    hover: '600',
    active: '700',
    focus: '700',
  },
  secondaryShade: '50',
  onPrimary: { color: 'porcelain', shade: '50' },
  typography: {
    heading:
      'var(--font-stratus-heading, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
    body: 'var(--font-stratus-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
    code: 'var(--font-stratus-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.025em',
  },
  shape: {
    control: '10px',
    surface: '16px',
    overlay: '20px',
    borderWidth: '1px',
  },
  elevation: {
    surface: '0 0 0 1px {colors.neutral.200}',
    raised:
      '0 0 0 1px {colors.neutral.200}, 0 8px 24px -12px {colors.neutral.800}',
    overlay:
      '0 0 0 1px {colors.neutral.200}, 0 24px 56px -20px {colors.neutral.900}',
  },
  density: {
    controlHeights: { sm: '32px', md: '40px', lg: '48px' },
    spacing: { xs: '4px', sm: '8px', md: '12px', lg: '20px' },
  },
  motion: {
    character: 'Precise and gently springy.',
    duration: { fast: '120ms', normal: '180ms', slow: '260ms' },
    easing: {
      default: 'cubic-bezier(0.2, 0, 0, 1)',
      enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
