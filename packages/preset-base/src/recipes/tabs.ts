import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'Tabs',
  slots: ['root', 'list', 'tab', 'pane'],
});
