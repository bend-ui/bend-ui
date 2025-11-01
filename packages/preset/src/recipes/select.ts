import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: { selector: '&' },
  control: { selector: '&  [data-part="control"]' },
  trigger: { selector: '&  [data-part="trigger"]' },
  valueText: { selector: '&  [data-part="valueText"]' },
  clearTrigger: { selector: '&  [data-part="clearTrigger"]' },
  content: { selector: '&  [data-part="content"]' },
  indicator: { selector: '&  [data-part="indicator"]' },
  itemGroupLabel: { selector: '&  [data-part="itemGroupLabel"]' },
  itemGroup: { selector: '&  [data-part="itemGroup"]' },
  item: { selector: '&  [data-part="item"]' },
  itemText: { selector: '&  [data-part="itemText"]' },
  itemIndicator: { selector: '&  [data-part="itemIndicator"]' },
  label: { selector: '&  [data-part="label"]' },
  positioner: { selector: '&  [data-part="positioner"]' },
});

export const selectRecipe = defineRecipe({
  description: '',
  className: 'Select',
  base: parts({
    control: {
      gap: 'sm',
      rounded: 'md',
      backgroundColor: 'fill',
      border: 'base',
    },
    trigger: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      py: 'sm',
      px: 'md',
      gap: 'sm',
    },
    valueText: {
      textAlign: 'left',
    },
    indicator: {
      marginLeft: 'auto',
    },
    clearTrigger: {
      flex: 'none',
    },
  }),
});

export const selectDropdownRecipe = defineRecipe({
  className: 'SelectDropdown',
  base: parts({
    content: {
      rounded: 'md',
      layerStyle: 'overlay',
      py: 'sm',
      px: 'md',
      _open: {
        animation: 'overlay.in',
      },
      _closed: {
        animation: 'overlay.out',
      },
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'sm',
      _hover: {
        backgroundColor: 'fill.hover',
      },
    },
  }),
});
