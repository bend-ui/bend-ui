# Overlays and navigation reference

BEN-43 audits the existing Base UI adapters for Popover, Tooltip, Menu, Tabs,
Card, ScrollArea, and NavigationMenu. The [working example](../apps/website/content/docs/components/overlays-navigation.mdx)
combines these components using their native composition and keyboard behavior.

Popover retains its children alongside its title and description. Menu and
Tooltip preserve the existing contextual surface scope through their portals;
a nested overlay remains at the overlay level. Card participates in that scope
when `contextual` or `surfaceLevel` is supplied, while retaining caller styles
and refs. The Menu popup exposes the native popup props and ref. Disabled Menu
items can receive keyboard focus as in Base UI, but cannot be activated.

ScrollArea now exposes its existing Content part for compound composition.

Base UI Tooltip is a visual label; the example matches its popup text to the
trigger’s accessible name and reserves supplemental information for inline
content or a Popover.

The former hardcoded Tooltip and NavigationMenu demo exports now represent their
prop-driven roots. Their examples move to Storybook and the Docs site; callers
of the former demos should supply their own content. Existing compound exports
remain available.

The Docs site extracts the recipes used by this example, including the popup
bounds and focus states. The shared documentation chrome can clip focus outlines
at narrow viewport edges; that separate layout issue is tracked in BEN-50.
This reference does not claim a complete screen-reader or accessibility audit.

## Validation

- `NX_DAEMON=false pnpm nx run-many -t test,typecheck -p base-ui,preset --output-style=static` passed (10 tasks; 35 Base UI tests).
- `NX_DAEMON=false pnpm nx build website --output-style=static` passed (9 tasks), including the published ScrollArea composition used by the example.
- `NX_DAEMON=false pnpm validate --base=origin/main --output-style=static` passed (60 tasks across 15 projects and their dependencies).

The built Docs example was exercised in Chromium at 1280×800 and 320×800,
in both light and dark Stratus modes. The checks covered native links, manual
Tabs activation, nested Popover and Menu Escape behavior and focus return,
Menu typeahead, disabled items, checkbox toggling and its visible indicator,
Tooltip focus, and keyboard scrolling. Seven individual component routes
returned HTTP 200 without page errors. Popovers and menus remained within the
viewport; the long menu scrolled and the Popover description did not overflow
or intersect the focused action outline.

For those measured Stratus cases, enabled example text and the tested custom focus
outlines had at least 11:1 contrast; highlighted Menu items and hovered Tabs
had at least 12:1. A light document with a locally applied dark popup class also
retained readable highlighted text. These are targeted measurements, not a
claim about every theme or state. Surface mode classes do not independently
rebind document-resolved semantic aliases; provide explicit surface appearances
when a portal must reproduce a local appearance.

The sequential packaged-consumer check also passed:
`NX_DAEMON=false pnpm nx run panda-consumer:verify --output-style=static`
(8 tasks), including installed recipe replacement and published type boundaries.
