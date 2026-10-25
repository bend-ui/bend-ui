import { defineThemePersonality } from './contract';

export const solsticePersonality = defineThemePersonality({
  id: 'solstice',
  name: 'Solstice',
  description: 'Playful, creative, optimistic, and bold.',
  primary: 'butter-yellow',
  secondary: 'royal-iris',
  lightColor: 'butter-yellow',
  darkColor: 'royal-iris',
  primaryStates: {
    default: '500',
    hover: '400',
    active: '300',
    focus: '400',
  },
  secondaryShade: '600',
  onPrimary: { color: 'royal-iris', shade: '900' },
  typography: {
    heading:
      'var(--font-solstice-heading, "Trebuchet MS", ui-rounded, system-ui, sans-serif)',
    body: 'var(--font-solstice-body, "Trebuchet MS", ui-rounded, system-ui, sans-serif)',
    code: 'var(--font-solstice-code, ui-monospace, "SFMono-Regular", Consolas, monospace)',
    headingTracking: '-0.02em',
  },
  shape: {
    control: '16px',
    surface: '24px',
    overlay: '28px',
    borderWidth: '2px',
  },
  elevation: {
    surface: '0 0 0 2px {colors.secondary.600}',
    raised: '4px 4px 0 {colors.secondary.600}',
    overlay: '8px 8px 0 {colors.secondary.700}',
  },
  density: {
    controlHeights: { sm: '36px', md: '44px', lg: '52px' },
    spacing: { xs: '6px', sm: '10px', md: '16px', lg: '24px' },
  },
  motion: {
    character: 'Buoyant with a controlled overshoot.',
    duration: { fast: '140ms', normal: '240ms', slow: '360ms' },
    easing: {
      default: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      enter: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      exit: 'cubic-bezier(0.4, 0, 1, 1)',
    },
  },
});
