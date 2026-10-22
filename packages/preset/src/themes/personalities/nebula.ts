import { defineThemePersonality } from './contract';

export const nebulaPersonality = defineThemePersonality({
  id: 'nebula',
  name: 'Nebula',
  description: 'Neon, expressive, nocturnal, and futuristic.',
  primary: 'dragonfruit',
  secondary: 'night-violet',
  lightColor: 'dragonfruit',
  darkColor: 'night-violet',
  primaryStates: {
    default: '200',
    hover: '100',
    active: '50',
    focus: '100',
  },
  secondaryShade: '700',
  onPrimary: { color: 'night-violet', shade: '950' },
  typography: {
    heading:
      'var(--font-nebula-heading, "Arial Narrow", "Avenir Next Condensed", system-ui, sans-serif)',
    body: 'var(--font-nebula-body, "Avenir Next", system-ui, sans-serif)',
    code: 'var(--font-nebula-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.035em',
  },
  shape: {
    control: '999px',
    surface: '24px',
    overlay: '32px',
    borderWidth: '1px',
  },
  elevation: {
    surface: '0 0 0 1px {colors.primary.800}',
    raised: '0 12px 32px -14px oklch(0.683 0.228 358.991 / 0.45)',
    overlay: '0 24px 64px -20px oklch(0.683 0.228 358.991 / 0.58)',
  },
  density: {
    controlHeights: { sm: '36px', md: '44px', lg: '52px' },
    spacing: { xs: '4px', sm: '10px', md: '16px', lg: '28px' },
  },
  motion: {
    character: 'Dramatic, fluid, and elastic.',
    duration: { fast: '160ms', normal: '260ms', slow: '420ms' },
    easing: {
      default: 'cubic-bezier(0.2, 0, 0, 1)',
      enter: 'cubic-bezier(0.16, 1, 0.3, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
