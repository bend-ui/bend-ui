import { defineSlotRecipe } from '@pandacss/dev';

export default defineSlotRecipe({
  className: 'Select',
  slots: [
    'root',
    'clearTrigger',
    'content',
    'control',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'itemIndicator',
    'item',
    'itemText',
    'label',
    'positioner',
    'trigger',
    'valueText',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      _hidden: {
        display: 'none',
      },
    },
    control: {
      display: 'flex',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
    },
    trigger: {
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      outline: 'none',
      width: 'full',
    },
  },
});
