import { defineThemePersonality } from './contract';

export const asterPersonality = defineThemePersonality({
  id: 'aster',
  name: 'Aster',
  description: 'Futuristic, artistic, warm, and sophisticated.',
  primary: 'ultra-violet',
  secondary: 'soft-apricot',
  lightColor: 'soft-apricot',
  darkColor: 'ultra-violet',
  primaryStates: {
    default: '500',
    hover: '600',
    active: '700',
    focus: '700',
  },
  secondaryShade: '100',
  onPrimary: { color: 'soft-apricot', shade: '50' },
  typography: {
    heading:
      'var(--font-aster-heading, "Avenir Next", "Segoe UI", system-ui, sans-serif)',
    body: 'var(--font-aster-body, "Avenir Next", "Segoe UI", system-ui, sans-serif)',
    code: 'var(--font-aster-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.03em',
  },
  shape: {
    control: '12px',
    surface: '20px',
    overlay: '28px',
    borderWidth: '1px',
  },
  elevation: {
    surface: '0 0 0 1px {colors.neutral.200}',
    raised: '0 10px 28px -16px oklch(0.496 0.283 288.375 / 0.34)',
    overlay: '0 28px 72px -24px oklch(0.496 0.283 288.375 / 0.46)',
  },
  density: {
    controlHeights: { sm: '34px', md: '42px', lg: '50px' },
    spacing: { xs: '4px', sm: '9px', md: '15px', lg: '25px' },
  },
  motion: {
    character: 'Fluid, graceful, and slightly asymmetric.',
    duration: { fast: '140ms', normal: '240ms', slow: '360ms' },
    easing: {
      default: 'cubic-bezier(0.2, 0, 0, 1)',
      enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
