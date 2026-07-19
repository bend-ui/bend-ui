import { definePreset, defineRecipe, defineSlotRecipe } from '@pandacss/dev';

const button = defineSlotRecipe({
  className: 'Button',
  slots: ['root', 'label', 'icon', 'spinner'],
  base: {
    root: {
      border: '2px solid #18181b',
      borderRadius: '999px',
      boxShadow: '4px 4px 0 #18181b',
      fontFamily: 'Space Grotesk, ui-sans-serif, sans-serif',
      fontWeight: '700',
      letterSpacing: '-0.01em',
      transitionProperty: 'transform, box-shadow',
      transitionDuration: '140ms',
      transitionTimingFunction: 'cubic-bezier(0.2, 0, 0, 1)',
      _hover: {
        transform: 'translate(-1px, -1px)',
        boxShadow: '6px 6px 0 #18181b',
      },
      _active: { transform: 'scale(0.96)', boxShadow: '2px 2px 0 #18181b' },
      _disabled: { cursor: 'not-allowed', opacity: '0.5' },
    },
  },
  variants: {
    variant: {
      primary: { root: { background: '#c7ff4a', color: '#18181b' } },
      secondary: { root: { background: '#fffdf4', color: '#18181b' } },
      tertiary: { root: { background: '#b8d8ff', color: '#18181b' } },
      danger: { root: { background: '#ff8a8a', color: '#18181b' } },
      inverse: { root: { background: '#18181b', color: '#fffdf4' } },
    },
    size: {
      sm: { root: { minHeight: '40px', paddingInline: '16px', gap: '6px' } },
      md: { root: { minHeight: '44px', paddingInline: '20px', gap: '8px' } },
      lg: { root: { minHeight: '52px', paddingInline: '26px', gap: '10px' } },
    },
    isRounded: { true: { root: { borderRadius: '999px' } } },
  },
  defaultVariants: { variant: 'secondary', size: 'md' },
});

const badge = defineRecipe({
  className: 'Badge',
  base: {
    border: '2px solid #18181b',
    borderRadius: '999px',
    color: '#18181b',
    fontFamily: 'Space Mono, ui-monospace, monospace',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.04em',
    padding: '5px 10px',
    textTransform: 'uppercase',
  },
  variants: {
    variant: {
      solid: {},
      subtle: { opacity: '0.82' },
      outline: { background: 'transparent' },
    },
    palette: {
      default: { background: '#e7e5e4' },
      primary: { background: '#c7ff4a' },
      danger: { background: '#ff8a8a' },
      warning: { background: '#ffd166' },
      success: { background: '#86efac' },
      info: { background: '#b8d8ff' },
    },
  },
  defaultVariants: { variant: 'solid', palette: 'primary' },
});

const input = defineRecipe({
  className: 'Input',
  base: {
    background: '#fffdf4',
    border: '2px solid #18181b',
    borderRadius: '14px',
    color: '#18181b',
    fontFamily: 'Space Grotesk, ui-sans-serif, sans-serif',
    outline: 'none',
    transitionProperty: 'box-shadow, transform',
    transitionDuration: '140ms',
    _focus: {
      boxShadow: '4px 4px 0 #7c3aed',
      transform: 'translate(-1px, -1px)',
    },
  },
  variants: {
    size: {
      sm: { height: '40px', paddingInline: '12px' },
      md: { height: '46px', paddingInline: '16px' },
      lg: { height: '52px', paddingInline: '18px' },
    },
    variant: {
      solid: { background: '#f1efe5' },
      outline: { background: '#fffdf4' },
    },
  },
  defaultVariants: { size: 'md', variant: 'outline' },
});

const card = defineSlotRecipe({
  className: 'Card',
  slots: [
    'root',
    'header',
    'title',
    'description',
    'body',
    'footer',
    'section',
  ],
  base: {
    root: {
      background: '#fffdf4',
      border: '2px solid #18181b',
      borderRadius: '26px',
      boxShadow: '8px 8px 0 #18181b',
      padding: '24px',
    },
    header: { marginBottom: '18px' },
    title: {
      color: '#18181b',
      fontFamily: 'Space Grotesk, ui-sans-serif, sans-serif',
      fontSize: '20px',
      fontWeight: '800',
      letterSpacing: '-0.03em',
    },
    description: { color: '#52525b', fontSize: '14px', marginTop: '4px' },
    body: { marginTop: '18px' },
    footer: { marginTop: '20px' },
  },
});

const tabs = defineSlotRecipe({
  className: 'Tabs',
  slots: ['root', 'list', 'trigger', 'indicator', 'content'],
  base: {
    root: { gap: '18px' },
    list: {
      background: '#f1efe5',
      border: '2px solid #18181b',
      borderRadius: '999px',
      display: 'flex',
      padding: '4px',
    },
    trigger: {
      borderRadius: '999px',
      color: '#52525b',
      fontWeight: '700',
      minHeight: '40px',
      paddingInline: '16px',
      _selected: { background: '#7c3aed', color: '#fffdf4' },
    },
    content: { color: '#3f3f46', paddingTop: '8px' },
  },
});

// The package barrel evaluates every adapter module in test environments.
// These structural fallbacks keep non-gallery exports loadable without pulling
// Bend's design preset back into the Level 3 build.
const alertDialog = defineRecipe({ className: 'Modal' });
const formField = defineRecipe({ className: 'FormField' });
const overlay = defineRecipe({ className: 'Overlay' });
const text = defineRecipe({
  className: 'Text',
  variants: {
    variant: {
      headline: {},
      title: {},
      body: {},
      caption: {},
    },
  },
});
const navbar = defineSlotRecipe({
  className: 'Navbar',
  slots: [
    'root',
    'list',
    'item',
    'link',
    'trigger',
    'content',
    'icon',
    'portal',
    'positioner',
    'popup',
    'arrow',
    'viewport',
  ],
});

export const customDesignPreset = definePreset({
  name: 'signal-house',
  theme: {
    extend: {
      tokens: {
        colors: {
          ink: { value: '#18181b' },
          paper: { value: '#fffdf4' },
          signal: { value: '#c7ff4a' },
          ultraviolet: { value: '#7c3aed' },
        },
        fonts: {
          body: { value: 'Space Grotesk, ui-sans-serif, sans-serif' },
          mono: { value: 'Space Mono, ui-monospace, monospace' },
        },
      },
      recipes: { alertDialog, badge, button, formField, input, overlay, text },
      slotRecipes: { card, navbar, tabs },
    },
  },
  globalCss: {
    'html, body': { background: '#e9e5d8', color: '#18181b' },
    body: { fontFamily: 'Space Grotesk, ui-sans-serif, sans-serif' },
  },
});
