import { defineSlotRecipe } from '@pandacss/dev';

export const inputConfig = {
  className: 'Input',
  slots: ['root', 'icon', 'iconEnd', 'field', 'addonStart', 'addonEnd'],
};

export const input = defineSlotRecipe({
  className: inputConfig.className,
  slots: inputConfig.slots,
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    field: {
      flex: '1 1 auto',
      appearance: 'none',
      backgroundColor: 'transparent',
      width: 'full',
      _focus: {
        outline: 'none',
      },
    },
    icon: {
      position: 'absolute',
      insetStart: '0',
      flex: '0',
      pointerEvents: 'none',
    },
    iconEnd: {
      position: 'absolute',
      insetEnd: '0',
      flex: '0',
      pointerEvents: 'none',
    },
    addonStart: {
      flex: '0',
    },
    addonEnd: {
      flex: '0',
    },
  },
});
