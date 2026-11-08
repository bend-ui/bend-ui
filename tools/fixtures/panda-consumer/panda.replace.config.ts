import { defineConfig, defineSlotRecipe, defineRecipe } from '@pandacss/dev';
import base from './panda.config';

export default defineConfig({
  ...base,
  theme: {
    ...base.theme,
    recipes: {
      text: defineRecipe({
        className: 'Text',
        base: { color: '#164e63' },
        variants: {
          variant: {
            body: { fontSize: '16px' },
            billboard: { fontSize: '43px' },
          },
        },
      }),
    },
    slotRecipes: {
      select: defineSlotRecipe({
        className: 'Select',
        slots: ['control', 'trigger', 'valueText', 'indicator'],
        base: {
          control: { display: 'flex' },
          trigger: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            border: '2px solid #7c3aed',
            borderRadius: '2px',
            backgroundColor: 'bg',
            color: 'text',
            paddingInline: '12px',
            _focusVisible: {
              outline: '2px solid #7c3aed',
              outlineOffset: '3px',
            },
            _disabled: { opacity: 0.5 },
          },
          valueText: { flex: '1', textAlign: 'start' },
          indicator: { width: '20px', height: '20px' },
        },
        variants: {
          size: {
            sm: { trigger: { minHeight: '32px' } },
            md: { trigger: { minHeight: '40px' } },
            lg: { trigger: { minHeight: '48px' } },
          },
        },
        defaultVariants: { size: 'md' },
      }),
      selectDropdown: defineSlotRecipe({
        className: 'SelectDropdown',
        slots: [
          'positioner',
          'content',
          'item',
          'itemText',
          'itemIndicator',
          'itemGroup',
          'itemGroupLabel',
        ],
        base: {
          content: {
            backgroundColor: 'bg.overlay',
            color: 'text',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: '#7c3aed',
            borderRadius: '2px',
            padding: '4px',
            maxHeight: 'min(20rem, var(--available-height))',
            overflowY: 'auto',
          },
          item: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px',
            _highlighted: {
              outline: '2px solid #7c3aed',
              outlineOffset: '-2px',
            },
            _selected: { fontWeight: 'bold' },
            _disabled: { opacity: 0.5 },
          },
          itemIndicator: { width: '20px', height: '20px' },
          itemGroupLabel: { fontWeight: 'bold' },
        },
      }),
      button: defineSlotRecipe({
        className: 'Button',
        jsx: ['RecipeButton'],
        slots: ['root', 'label', 'icon', 'spinner'],
        base: {
          root: {
            display: 'inline-flex',
            borderRadius: '3px',
            borderStyle: 'solid',
            borderColor: 'currentColor',
            outlineOffset: '13px',
          },
          label: { textDecoration: 'underline' },
        },
        variants: {
          variant: {
            primary: { root: { backgroundColor: '#1e40af', color: 'white' } },
            secondary: { root: { backgroundColor: '#e2e8f0' } },
            editorial: { root: { backgroundColor: '#a16207', color: 'white' } },
          },
          size: {
            md: { root: { minHeight: '40px' } },
            lg: { root: { minHeight: '48px' } },
            jumbo: { root: { minHeight: '80px' }, label: { fontSize: '29px' } },
          },
        },
        compoundVariants: [
          {
            variant: 'primary',
            size: 'lg',
            css: { root: { outlineStyle: 'solid', outlineWidth: '6px' } },
          },
          {
            variant: 'editorial',
            size: 'jumbo',
            css: {
              root: { borderWidth: '9px' },
              label: { letterSpacing: '0.13em' },
            },
          },
        ],
        // Match the published runtime's defaults for drop-in behavior.
        defaultVariants: { variant: 'secondary', size: 'md' },
      }),
    },
  },
});
