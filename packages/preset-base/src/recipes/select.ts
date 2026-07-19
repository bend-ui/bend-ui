import { defineSlotRecipe } from '@pandacss/dev';

export const selectRecipe = defineSlotRecipe({
  slots: [
    'root',
    'clearTrigger',
    'content',
    'control',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'item',
    'itemText',
    'itemIndicator',
    'label',
    'positioner',
    'trigger',
    'valueText',
  ],
  className: 'Select',
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
    },
    control: {
      display: 'flex',
      alignItems: 'center',
    },
    trigger: {
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      outline: 'none',
      width: 'full',
    },
    valueText: {
      width: 'full',
      pointerEvents: 'none',
    },
    indicator: {
      pointerEvents: 'none',
      flex: 'none',
    },
    clearTrigger: {
      pointerEvents: 'none',
      flex: 'none',
    },
  },
});

export const selectDropdownRecipe = defineSlotRecipe({
  slots: [
    'root',
    'clearTrigger',
    'content',
    'control',
    'indicator',
    'itemGroupLabel',
    'itemGroup',
    'item',
    'itemText',
    'itemIndicator',
    'label',
    'positioner',
    'trigger',
    'valueText',
  ],
  className: 'SelectDropdown',
  base: {
    content: {
      width: 'full',
      // width: 'full',
      // display: 'flex',
      // flexDirection: 'column',
      // _hidden: {
      //   display: 'none',
      // },
    },
  },
});
