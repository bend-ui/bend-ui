import { defineSlotRecipe } from '@pandacss/dev';

const slots = [
  'positioner',
  'content',
  'title',
  'description',
  'closeTrigger',
] as const;

export const dialogRecipe = defineSlotRecipe({
  slots,
  className: 'Dialog',
  base: {
    positioner: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      left: '0',
      overflow: 'auto',
      position: 'fixed',
      top: '0',
      width: '100vw',
      height: '100dvh',
      zIndex: 'modal',
    },
    content: {
      position: 'relative',
    },
  },
});

export const dialogParts = slots;
