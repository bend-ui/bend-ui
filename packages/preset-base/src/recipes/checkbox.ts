import { defineParts, defineRecipe } from '@pandacss/dev';

const parts = defineParts({
  root: {
    selector: '&',
  },
  label: {
    selector: '& [data-part="label"]',
  },
  control: {
    selector: '& [data-part="control"]',
  },
  indicator: {
    selector: '& [data-part="indicator"]',
  },
});

export const checkbox = defineRecipe({
  description: 'Styles for the Checkbox component',
  className: 'Checkbox',
  base: parts({
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
    },
    label: {},
    control: {
      flexShrink: '0',
      cursor: 'pointer',
      _disabled: {
        cursor: 'not-allowed',
      },
      '& svg': {
        width: '100%',
        height: '100%',
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'currentColor',
    },
  }),
});

export const checkboxParts = parts;
