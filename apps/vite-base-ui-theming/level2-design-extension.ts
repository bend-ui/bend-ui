import { definePreset, defineSlotRecipe } from '@pandacss/dev';

const button = defineSlotRecipe({
  className: 'Button',
  slots: ['root', 'label', 'icon', 'spinner'],
  base: {
    root: {
      borderRadius: '999px',
      boxShadow: '0 10px 28px color-mix(in srgb, #7048e8 22%, transparent)',
      _active: { transform: 'scale(0.96)' },
    },
  },
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
    root: { borderRadius: '28px' },
    title: { letterSpacing: '-0.035em' },
  },
});

export const level2DesignExtension = definePreset({
  name: 'bend-ui-consumer-extension',
  theme: {
    extend: {
      tokens: {
        fonts: { body: { value: 'Inter Variable, ui-sans-serif, sans-serif' } },
        colors: { consumerAccent: { value: '#7048e8' } },
      },
      recipes: { button },
      slotRecipes: { card },
    },
  },
});
