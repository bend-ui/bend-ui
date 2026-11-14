# Core form and feedback reference (BEN-42)

## Audit and scope

Existing recipes and native primitives were reused. The audit found no Base UI Textarea export; fixed-content demo exports for Radio, Switch, Field and Separator; an always-checked Checkbox convenience default; incomplete framing on Field.Control; and missing or unreliable visual states. This change does not depend on the unmerged Button, Select or Dialog reference work.

The v0 top-level APIs now accept application props and content. Radio is one labeled option inside RadioGroup. Switch forwards native behavior to its control. Field forwards Root props and children, while Field.Control renders the complete Input frame. Separator forwards native orientation and ref instead of rendering navigation. Existing compound parts remain available. Checkbox starts unchecked unless explicitly configured.

Textarea uses the installed Base UI 1.6 Field.Control `render` composition with a native textarea. Native multiline values, rows, onChange/selection events and HTMLTextAreaElement refs remain typed as textarea props; field registration and validation remain primitive-owned. There are no prop casts or new shared React abstractions. RadioGroup restores the native generic value boundary after the style helper consumes its recipe variants.

## Anatomy and state ownership

| Family    | Styled parts                                             | Behavior and states                                                                             |
| --------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Input     | root, wrapper, input, icon, element, addon               | Native input props; descendant invalid/disabled and keyboard focus style its frame.             |
| Textarea  | root, field                                              | Native textarea props; Field validation, disabled/readOnly, vertical resize and keyboard focus. |
| Checkbox  | root label, control, indicator, label text               | Native checked/mixed/disabled/readOnly semantics; check or minus is decorative.                 |
| Radio     | group root, item label, itemControl, indicator, itemText | Native group selection/value, roving keyboard navigation and availability.                      |
| Switch    | root label, control, thumb, label                        | Native checked/disabled/readOnly/value props; position and fill identify state.                 |
| Field     | root, label, description, error, helper                  | Native label/control registration, validation and error descriptions.                           |
| Badge     | root                                                     | Textual status/category and semantic tone; announcements belong to a stable live region.        |
| Separator | root recipe                                              | Native role and orientation; vertical sizing belongs to its surrounding layout.                 |

Form controls retain `sm`/`md`/`lg` and inherit shared theme density. Checkbox, radio and switch sizes set both their labeled row and their smaller visual control; the wrapping label supplies the full target. Textarea rows controls multiline height. Badge and Separator acquire no arbitrary form size axis.

Input.Control remains a low-level standalone input-slot primitive; use Input or Field.Control for a complete frame, or Input.Root/Wrapper/Input for composition. Targeted Docs staticCss includes only this slice's eight recipe families because source extraction alone did not emit their wrapper-owned styles.

## Reset and validation pattern

The cohesive Field Docs example contains all eight families. Submit remains enabled. Required/type errors are rendered inline, linked to the relevant native control, and the first invalid control receives focus. Status includes text and uses a stable `role="status"` region. Its validated `Form.Root` submit callback reads native `FormData`: the Base UI `onFormSubmit` values contain registered fields, while the standalone checkbox and switch are native successful controls.

Base UI 1.6 does not synchronize every uncontrolled choice primitive with native form reset. The example deliberately remounts its uncontrolled form on reset; both action buttons sit outside the keyed subtree and refer to its stable form id, so the reset button keeps focus. Application forms can instead reset their controlled values. The adapter adds no reset abstraction.

## Verification

Focused behavior coverage includes field label/description/error linkage, native textarea event/ref/value semantics, unchecked defaults, submitted checkbox/radio/switch values, the documented reset pattern, disabled/readOnly and mixed states, size propagation, Badge content, and Separator orientation/ref forwarding. A Field-wrapped RadioGroup test verifies the group label, distinct rich-content option labels, and caller-provided `aria-label` and `aria-labelledby`.

- `NX_DAEMON=false pnpm validate --base=origin/main --output-style=static` passed 60 tasks across 15 projects and their dependencies, including 37 Base UI tests.
- `NX_DAEMON=false pnpm nx run panda-consumer:verify --output-style=static` passed the packed consumer and its seven dependencies after the Radio change.
- Chromium against the production build passed the Field form at 1280px and 320px in Stratus light and dark. It checked invalid submit and descriptions, multiline input, Radio arrows and option names, Space toggles, submitted values, disabled/readOnly behavior, reset defaults and focus, and focus outlines. Input, Textarea, Checkbox, Radio and Switch sizes matched the active 32px/40px/48px density tokens. All eight component routes returned 200 with visible content and no page errors.
- In that production check, the minimum focus-outline contrast against the adjacent surface was 4.75:1 in light and 3.64:1 in dark; error text measured 8.64:1 and 15.51:1 respectively. An earlier generated-CSS diagnostic also sampled control states and Badge treatments across the default and Stratus themes.

Shared MDX/chrome styling and narrow page overflow remain BEN-50 concerns. At 320px the shared layout places the form at the viewport edge, clipping part of its focus outline. This slice does not claim a complete screen-reader or WCAG audit.
