import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  clearTrigger: { selector: '&  [data-part="clearTrigger"]' },
  content: { selector: '&  [data-part="content"]' },
  control: { selector: '&  [data-part="control"]' },
  indicator: { selector: '&  [data-part="indicator"]' },
  itemGroupLabel: { selector: '&  [data-part="itemGroupLabel"]' },
  itemGroup: { selector: '&  [data-part="itemGroup"]' },
  item: { selector: '&  [data-part="item"]' },
  itemText: { selector: '&  [data-part="itemText"]' },
  itemIndicator: { selector: '&  [data-part="itemIndicator"]' },
  label: { selector: '&  [data-part="label"]' },
  positioner: { selector: '&  [data-part="positioner"]' },
  trigger: { selector: '&  [data-part="trigger"]' },
  valueText: { selector: '&  [data-part="valueText"]' },
});

export const selectRecipe = defineRecipe({
  className: 'Select',
  base: parts({
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
  }),
});

export const selectDropdownRecipe = defineRecipe({
  className: 'SelectDropdown',
  base: parts({
    content: {
      width: 'full',
      // width: 'full',
      // display: 'flex',
      // flexDirection: 'column',
      // _hidden: {
      //   display: 'none',
      // },
    },
  }),
});
