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
  description: '',
  className: 'Select',
  base: parts({
    control: {
      gap: 'sm',
      rounded: 'md',
      backgroundColor: 'surface',
      border: 'base',
    },
    trigger: {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'space-between',
      py: 'sm',
      px: 'md',
      gap: 'sm',
    },
    valueText: {},
    indicator: {
      marginLeft: 'auto',
    },
    clearTrigger: {
      flex: 'none',
    },
    content: {
      rounded: 'md',
      layerStyle: 'overlay',
      py: 'sm',
      px: 'md',
      width: 'full',
      minW: '240px',
      _open: {
        animation: 'overlay.in',
      },
      _closed: {
        animation: 'overlay.out',
      },
    },
    item: {
      gap: 'sm',
      _hover: {
        backgroundColor: 'surface.hover',
      },
    },
  }),
});
