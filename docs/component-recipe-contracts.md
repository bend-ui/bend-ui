# Public component anatomy and recipe contracts (BEN-32)

`@bend-ui/preset-base` exports a serializable, typed prototype for Button, Select and Dialog through `componentContracts`, plus `validateReplacementRecipe()`. This metadata describes the current Base UI v0 surface without importing React or Base UI types. It does not establish cross-adapter parity or freeze the final public component API.

## What belongs in the contract

Each `ComponentContract` records a schema version, prototype status, scope, public anatomy, recipe namespaces, variant values/defaults, treatment intent and CSS state selectors. An anatomy part is one of:

- `slot`: a public styling part bound to a named slot recipe.
- `recipe`: a public part styled by an ordinary recipe, such as Dialog's backdrop.
- `behavior`: composition or state ownership, without promising a styling slot.
- `unstyled`: an exported DOM part that the current adapter does not bind to a recipe.

A root provider, portal, focus manager or positioning algorithm is not automatically a public recipe slot. A part's public name need not equal its styling slot: Select's `value` binds to `select.valueText`, and Dialog's `popup` binds to `dialog.content`. Export capitalization and primitive implementation remain adapter concerns.

Private slots are listed per recipe. `required` means the adapter renders the slot internally, so replacements must still declare it. `optional` means it is unused by this v0 adapter, including legacy shared-preset slots. Private slots are not supported styling targets for consumers. This classification is scoped to Base UI v0 and says nothing about how another adapter uses the same recipe.

## Prototype anatomy

| Component       | Recipes                             | Public styling slots                                                                        | Important composition details                                                                                                                   |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Button          | `button` / `Button`                 | `root`, `label`, `icon`, `spinner`                                                          | All four are public, including loading presentation. Behavior and native accessibility remain component-owned.                                  |
| Select          | `select` / `Select`                 | `trigger`, `valueText`, `indicator`                                                         | The convenience component renders a private, required `control`; Root is a provider, not a styled DOM root.                                     |
| Select dropdown | `selectDropdown` / `SelectDropdown` | `positioner`, `content`, `item`, `itemText`, `itemIndicator`, `itemGroup`, `itemGroupLabel` | The recipe context is separate from the trigger recipe, including when portalled. Arrow, List and similar exports are currently unstyled parts. |
| Dialog          | `dialog` / `Dialog`                 | `positioner`, `content`, `title`, `description`, `closeTrigger`                             | Root and Portal are behavior parts. The default Trigger uses Button's styling contract.                                                         |
| Dialog backdrop | `backdrop` / `Backdrop`             | Ordinary recipe, not a slot map                                                             | Replace independently from the Dialog content recipe.                                                                                           |

Button currently defaults to `variant="secondary"` and `size="md"`, with `primary`, `secondary`, `tertiary`, `danger`, `inverse`, and `sm`/`md`/`lg` values. `isFull` comes from the structural preset and `isRounded` from the design preset. Dialog defaults to `size="md"`. Select has no public recipe variant axes yet. These are current-runtime facts, not the future hierarchy/size/treatment API planned for the reference component work.

## Replacement validation

Call the validator on a **resolved, complete recipe**, after preset composition. Passing an unresolved partial `theme.extend` object will correctly look incomplete; the validator does not perform Panda's merge for you.

```ts
import { componentContracts, validateReplacementRecipe } from '@bend-ui/preset-base';

const issues = validateReplacementRecipe(componentContracts.button, 'button', resolvedButtonRecipe);
const errors = issues.filter((issue) => issue.severity === 'error');
```

The validator reports structured `severity`, `code`, `path` and `message` fields. It does not throw or modify a recipe.

Errors identify changes that break drop-in use by the packed component: recipe kind, namespace, missing public slots, missing required private slots, missing published variant axes/values, or changed defaults. For example, Select replacements may omit unused private `clearTrigger`, but must preserve internal `control`.

Warnings identify consumer-owned extensions: new axes, new values, and compounds. As [BEN-31 demonstrated](panda-recipe-customization.md), app codegen cannot widen published component declarations or update their compound-selection runtime. A warning is not proof that a new variant will work with the packed component. Use the consumer-generated recipe and props in a consumer-owned component when that runtime is required.

A deliberately reduced replacement can be valid Panda configuration while failing this **drop-in compatibility** policy. The caller can choose local ownership instead; the validator does not prohibit that customization.

## CSS states and manual criteria

Each state has a semantic name and canonical selector. A `condition` field links it to a design-preset union condition such as `_disabled`, `_open`, `_selected` or `_focusVisible`, following ADR-0002. Selectors are intentionally independent of Base UI implementation types. The current Button loading indicator additionally exposes `[data-loading]`; it has no named Panda condition in the preset.

The checker is structural. No-error output does not certify usable styling, accessibility or equivalent behavior. Replacement review must also verify:

- Layout and visibility for required parts, including private parts; declaring an empty slot does not retain its old styles.
- Visible keyboard focus, disabled behavior, highlighted/selected options, and open/closed presentation, using the documented state selectors.
- Context and styling through portals, native prop/ref forwarding, and preservation of accessible title/description relationships.
- Token availability, primitive-required positioning variables, and motion/reduced-motion behavior appropriate to the new styles.

BEN-33 validates representative factory, portal and ref behavior; this task does not rewrite those components.

## Documentation metadata example

The values are JSON-serializable and can drive a future docs table without importing a component implementation:

```ts
import { componentContracts } from '@bend-ui/preset-base';

const button = componentContracts.button;
const docsMetadata = {
  name: button.name,
  status: button.status,
  parts: button.anatomy,
  treatment: button.recipes.button.defaultTreatment,
  variants: button.recipes.button.variants,
  states: button.recipes.button.states,
};
const json = JSON.stringify(docsMetadata, null, 2);
```

This is a metadata prototype, not a new docs generator, schema-validation CLI or replacement for the component catalog. Future component changes must update the metadata alongside their implementation. The integration tests load Panda's actual composed design preset and ensure all slots are classified, canonical condition selectors match, and all five recipe contracts accept that resolved baseline.

## Validation

Run `pnpm nx test preset` for the real-preset integration and positive/negative compatibility tests. Run `pnpm nx build preset-base` for the exported schema and validator declarations. No component rendering or styling changes are part of this task.

- [BEN-32](https://linear.app/benoit-deziel/issue/BEN-32/define-public-component-anatomy-and-recipe-contracts)
- [Canonical state-attribute contract](adr/0002-canonical-state-attribute-contract.md)
