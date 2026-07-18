import { Conditions } from '@pandacss/types';

/**
 * Canonical, library-agnostic state-attribute contract (ADR-0002).
 *
 * Recipes style against a single set of semantic conditions. Each condition is a
 * `:is()` union that matches the native DOM attributes of every supported adapter
 * library so that Base UI's `data-open`, Ark UI's `data-state="open"` and React
 * Aria's `data-open` all resolve the same `open` styles — no per-library preset,
 * no runtime normalization.
 *
 * Attribute forms per library (empirically verified against the pinned versions):
 * - Base UI (`@base-ui/react`): bare booleans, both directions emitted
 *   (`data-open`/`data-closed`, `data-checked`/`data-unchecked`, `data-valid`/…),
 *   `data-focused`, animation via `data-starting-style`/`data-ending-style`.
 * - Ark UI (`@ark-ui/react`): enumerated `data-state="…"` plus bare booleans
 *   (`data-selected`, `data-highlighted`, `data-invalid`, …).
 * - React Aria (`react-aria-components`): bare booleans (`data-hovered`,
 *   `data-focused`, `data-pressed`, `data-selected`, `data-entering`/`data-exiting`, …).
 */
export const conditions: Conditions = {
  // Bend-specific presentation conditions (not upstream component state).
  light: '[data-color-mode=light] &, .light &',
  dark: '[data-color-mode=dark] &, .dark &',
  flat: '[data-tone="flat"] &',
  soft: '[data-tone="soft"] &',
  glass: '[data-tone="glass"] &',

  // Disclosure
  open: '&:is([open], [data-open], [data-state="open"])',
  closed: '&:is([data-closed], [data-state="closed"])',
  expanded: '&:is([data-expanded], [data-state="expanded"])',
  collapsed: '&:not(:is([data-expanded], [data-state="expanded"]))',

  // Selection / toggle
  selected: '&:is([data-selected], [aria-selected="true"], [data-state="selected"])',
  checked: '&:is([data-checked], [aria-checked="true"], [data-state="checked"])',
  unchecked: '&:is([data-unchecked], [data-state="unchecked"])',
  indeterminate:
    '&:is([data-indeterminate], [data-state="indeterminate"], :indeterminate)',
  pressed: '&:is([data-pressed], [aria-pressed="true"])',

  // Activity
  active: '&:is(:active, [data-active], [data-state="active"])',
  inactive: '&:is([data-inactive], [data-state="inactive"])',
  highlighted: '&:is([data-highlighted])',

  // Interaction
  hover: '&:is(:hover, [data-hover], [data-hovered])',
  focus: '&:is(:focus, [data-focus], [data-focused])',
  focusVisible: '&:is(:focus-visible, [data-focus-visible])',
  focusWithin: '&:is(:focus-within, [data-focus-within])',

  // Availability
  disabled: '&:is([data-disabled], [aria-disabled="true"], :disabled)',
  notDisabled: '&:not(:is([data-disabled], [aria-disabled="true"], :disabled))',
  readonly: '&:is([data-readonly], [aria-readonly="true"], :read-only)',
  required: '&:is([data-required], [aria-required="true"], :required)',

  // Validation
  invalid: '&:is([data-invalid], [aria-invalid="true"], :invalid)',
  valid: '&:not(:is([data-invalid], [aria-invalid="true"], :invalid))',

  // Content
  empty: '&:is([data-empty])',
  filled: '&:is([data-filled])',
  placeholderShown:
    '&:is([data-placeholder-shown], [data-placeholder], :placeholder-shown)',

  // Transition lifecycle
  entering: '&:is([data-entering], [data-starting-style], [data-state="entering"])',
  exiting: '&:is([data-exiting], [data-ending-style], [data-state="exiting"])',
  visible: '&:is([data-visible], [data-state="visible"])',
  hidden: '&:is([data-hidden], [hidden], [data-state="hidden"])',

  // Placement
  placementTop: '&[data-placement^="top"]',
  placementBottom: '&[data-placement^="bottom"]',
  placementLeft: '&[data-placement^="left"]',
  placementRight: '&[data-placement^="right"]',
};
