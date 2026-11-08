import { definePreset } from '@pandacss/dev';

/** An opt-in, sharp editorial treatment for the existing component recipes. */
export const atelierRecipeCollection = definePreset({
  name: 'bend-ui-atelier-recipes',
  theme: {
    extend: {
      slotRecipes: {
        button: {
          base: {
            root: {
              borderRadius: '2px',
              borderWidth: '2px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 'bold',
            },
          },
        },
        input: {
          base: {
            root: { borderRadius: '2px', borderWidth: '2px' },
            input: { fontFamily: 'mono' },
          },
          variants: { variant: { outline: { root: { borderWidth: '2px' } } } },
        },
        select: {
          base: {
            control: { borderRadius: '2px', borderWidth: '2px' },
            valueText: { fontFamily: 'mono' },
          },
        },
        selectDropdown: {
          base: {
            content: {
              borderRadius: '2px',
              borderWidth: '2px',
              borderStyle: 'solid',
            },
            item: { borderRadius: '0', fontFamily: 'mono' },
          },
        },
        card: {
          base: {
            root: {
              borderRadius: '2px',
              borderWidth: '2px',
              borderStyle: 'solid',
              p: '24px',
            },
            title: { textTransform: 'uppercase', letterSpacing: '0.08em' },
            section: {
              mx: '-24px',
              _first: { mt: '-24px' },
              _last: { mb: '-24px' },
            },
          },
          variants: {
            inheritPadding: { true: { section: { p: '24px' } } },
          },
        },
      },
    },
  },
});
