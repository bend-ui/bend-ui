import { defineSlotRecipe } from '@pandacss/dev';

const slots = ['root', 'list', 'trigger', 'indicator', 'content'] as const;

const tabs = defineSlotRecipe({
  className: 'Tabs',
  slots: slots,
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'md',
    },
  },
});

export const tabsParts = slots;
export const tabsRecipe = tabs;
