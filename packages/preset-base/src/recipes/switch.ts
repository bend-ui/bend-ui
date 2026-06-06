import { defineSlotRecipe } from '@pandacss/dev';

export const switchRecipe = defineSlotRecipe({
  className: 'Switch',
  slots: ['root', 'control', 'thumb', 'label'],
  jsx: ['Switch', /Switch\.+/],
});
