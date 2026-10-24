import type { ComponentContract } from './types';

const prototype = {
  schemaVersion: 1,
  status: 'prototype',
  scope: 'base-ui-v0',
} as const;

/** Current v0 anatomy, not a promise of cross-adapter parity or a final component API. */
export const componentContracts = {
  button: {
    ...prototype,
    name: 'Button',
    description: 'One action with optional label, icons and loading indicator.',
    anatomy: [
      {
        name: 'root',
        kind: 'slot',
        recipe: 'button',
        slot: 'root',
        description: 'Interactive action.',
      },
      {
        name: 'label',
        kind: 'slot',
        recipe: 'button',
        slot: 'label',
        description: 'Action text.',
      },
      {
        name: 'icon',
        kind: 'slot',
        recipe: 'button',
        slot: 'icon',
        description: 'Leading or trailing icon.',
      },
      {
        name: 'spinner',
        kind: 'slot',
        recipe: 'button',
        slot: 'spinner',
        description: 'Loading indicator.',
      },
    ],
    recipes: {
      button: {
        kind: 'slotRecipe',
        className: 'Button',
        privateSlots: {},
        defaultTreatment:
          'Secondary emphasis at medium size; loading and disabled behavior remain component-owned.',
        variants: {
          variant: {
            description: 'Visual treatment.',
            values: ['primary', 'secondary', 'tertiary', 'danger', 'inverse'],
            defaultValue: 'secondary',
          },
          size: {
            description: 'Spacing and typography scale.',
            values: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
          isFull: {
            description: 'Fill the available inline space.',
            values: ['true'],
          },
          isRounded: {
            description: 'Use a fully rounded shape.',
            values: ['true'],
          },
        },
        states: [
          { name: 'loading', selector: '[data-loading]', slots: ['spinner'] },
          {
            name: 'hover',
            condition: '_hover',
            selector: ':hover',
            slots: ['root'],
          },
          {
            name: 'disabled',
            condition: '_disabled',
            selector: '[data-disabled]',
            slots: ['root'],
          },
          {
            name: 'active',
            condition: '_active',
            selector: ':active',
            slots: ['root'],
          },
          {
            name: 'focusVisible',
            condition: '_focusVisible',
            selector: ':focus-visible',
            slots: ['root'],
          },
        ],
      },
    },
  },
  select: {
    ...prototype,
    name: 'Select',
    description:
      'Value selection with a separately styled dropdown, including portalled composition.',
    anatomy: [
      {
        name: 'root',
        kind: 'behavior',
        description:
          'Owns selection and recipe context; does not promise a DOM slot.',
      },
      {
        name: 'trigger',
        kind: 'slot',
        recipe: 'select',
        slot: 'trigger',
        description: 'Opens the dropdown.',
      },
      {
        name: 'value',
        kind: 'slot',
        recipe: 'select',
        slot: 'valueText',
        description: 'Selected value or placeholder.',
      },
      {
        name: 'icon',
        kind: 'slot',
        recipe: 'select',
        slot: 'indicator',
        description: 'Disclosure indicator.',
      },
      {
        name: 'portal',
        kind: 'behavior',
        description: 'Changes DOM placement without changing recipe ownership.',
      },
      {
        name: 'positioner',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'positioner',
        description: 'Anchored dropdown layout.',
      },
      {
        name: 'popup',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'content',
        description: 'Dropdown surface.',
      },
      {
        name: 'item',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'item',
        description: 'Selectable option.',
      },
      {
        name: 'itemText',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'itemText',
        description: 'Option label.',
      },
      {
        name: 'itemIndicator',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'itemIndicator',
        description: 'Selection mark.',
      },
      {
        name: 'group',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'itemGroup',
        description: 'Option grouping.',
      },
      {
        name: 'groupLabel',
        kind: 'slot',
        recipe: 'selectDropdown',
        slot: 'itemGroupLabel',
        description: 'Group heading.',
      },
      {
        name: 'backdrop',
        kind: 'unstyled',
        description:
          'Public DOM part, with no recipe slot bound by this adapter.',
      },
      {
        name: 'arrow',
        kind: 'unstyled',
        description: 'Optional positioning arrow.',
      },
      { name: 'list', kind: 'unstyled', description: 'Option-list container.' },
      { name: 'separator', kind: 'unstyled', description: 'Option separator.' },
      {
        name: 'scrollUpArrow',
        kind: 'unstyled',
        description: 'Upward scroll affordance.',
      },
      {
        name: 'scrollDownArrow',
        kind: 'unstyled',
        description: 'Downward scroll affordance.',
      },
    ],
    recipes: {
      select: {
        kind: 'slotRecipe',
        className: 'Select',
        privateSlots: {
          control: 'required',
          root: 'optional',
          clearTrigger: 'optional',
          content: 'optional',
          itemGroupLabel: 'optional',
          itemGroup: 'optional',
          item: 'optional',
          itemText: 'optional',
          itemIndicator: 'optional',
          label: 'optional',
          positioner: 'optional',
        },
        variants: {},
        defaultTreatment:
          'Token-based fill, border and medium corners; no public recipe variant axes yet.',
        states: [
          {
            name: 'open',
            condition: '_open',
            selector: '[data-open]',
            slots: ['trigger'],
          },
          {
            name: 'disabled',
            condition: '_disabled',
            selector: '[data-disabled]',
            slots: ['trigger'],
          },
          {
            name: 'focusVisible',
            condition: '_focusVisible',
            selector: ':focus-visible',
            slots: ['trigger'],
          },
        ],
      },
      selectDropdown: {
        kind: 'slotRecipe',
        className: 'SelectDropdown',
        privateSlots: {
          root: 'optional',
          clearTrigger: 'optional',
          control: 'optional',
          indicator: 'optional',
          label: 'optional',
          trigger: 'optional',
          valueText: 'optional',
        },
        variants: {},
        defaultTreatment:
          'Overlay surface with open/closed motion; positioning behavior remains primitive-owned.',
        states: [
          {
            name: 'open',
            condition: '_open',
            selector: '[data-open]',
            slots: ['content'],
          },
          {
            name: 'closed',
            condition: '_closed',
            selector: '[data-closed]',
            slots: ['content'],
          },
          {
            name: 'highlighted',
            condition: '_highlighted',
            selector: '[data-highlighted]',
            slots: ['item'],
          },
          {
            name: 'selected',
            condition: '_selected',
            selector: '[data-selected]',
            slots: ['item'],
          },
          {
            name: 'disabled',
            condition: '_disabled',
            selector: '[data-disabled]',
            slots: ['item'],
          },
        ],
      },
    },
  },
  dialog: {
    ...prototype,
    name: 'Dialog',
    description:
      'Modal content, with a distinct backdrop recipe and portal-safe context.',
    anatomy: [
      {
        name: 'root',
        kind: 'behavior',
        description:
          'Owns disclosure state and recipe context, without a DOM slot.',
      },
      {
        name: 'trigger',
        kind: 'behavior',
        description:
          'Opens the dialog; the convenience renderer delegates its styling to Button.',
      },
      {
        name: 'portal',
        kind: 'behavior',
        description: 'Changes DOM placement, not recipe ownership.',
      },
      {
        name: 'backdrop',
        kind: 'recipe',
        recipe: 'backdrop',
        description: 'Independent overlay backdrop.',
      },
      {
        name: 'positioner',
        kind: 'slot',
        recipe: 'dialog',
        slot: 'positioner',
        description: 'Viewport layout container.',
      },
      {
        name: 'popup',
        kind: 'slot',
        recipe: 'dialog',
        slot: 'content',
        description: 'Dialog surface.',
      },
      {
        name: 'title',
        kind: 'slot',
        recipe: 'dialog',
        slot: 'title',
        description: 'Accessible dialog heading.',
      },
      {
        name: 'description',
        kind: 'slot',
        recipe: 'dialog',
        slot: 'description',
        description: 'Accessible explanatory text.',
      },
      {
        name: 'close',
        kind: 'slot',
        recipe: 'dialog',
        slot: 'closeTrigger',
        description: 'Dismiss action.',
      },
    ],
    recipes: {
      dialog: {
        kind: 'slotRecipe',
        className: 'Dialog',
        privateSlots: {},
        variants: {
          size: {
            description: 'Content width and padding.',
            values: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
        },
        defaultTreatment:
          'Medium overlay surface; focus management, dismissal and scroll behavior remain primitive-owned.',
        states: [
          {
            name: 'open',
            condition: '_open',
            selector: '[data-open]',
            slots: ['content'],
          },
          {
            name: 'closed',
            condition: '_closed',
            selector: '[data-closed]',
            slots: ['content'],
          },
        ],
      },
      backdrop: {
        kind: 'recipe',
        className: 'Backdrop',
        privateSlots: {},
        variants: {},
        defaultTreatment: 'Dimmed and blurred viewport backdrop.',
        states: [
          {
            name: 'open',
            condition: '_open',
            selector: '[data-open]',
            slots: [],
          },
          {
            name: 'closed',
            condition: '_closed',
            selector: '[data-closed]',
            slots: [],
          },
        ],
      },
    },
  },
} as const satisfies Record<string, ComponentContract>;
