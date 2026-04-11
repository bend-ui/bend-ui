import { defineSlotRecipe } from '@pandacss/dev';

export const floatingPanel = defineSlotRecipe({
  className: 'FloatingPanel',
  slots: [
    'root',
    'trigger',
    'positioner',
    'header',
    'body',
    'footer',
    'title',
    'handle',
    'closeTrigger',
    'resizeTrigger',
  ],
});
