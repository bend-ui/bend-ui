import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
});

export const badgeConfig = {
  className: 'Badge',
  slots: ['root'],
};

export const badge = defineRecipe({
  className: 'badge',
  base: parts({
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
});
