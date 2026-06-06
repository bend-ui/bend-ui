---
name: "document-component"
description: "Generate rich documentation for a UI component using the ux-components MCP. Covers anatomy, states, usage guidelines, cross-system naming, and alternatives. Use when the user asks to document a component, wants UX reference docs, or needs to understand how a component works across design systems."
---

# Document Component

Generate structured documentation for a UI component using the `ux-components` MCP.

## Input

The user provides a component name (e.g. `combobox`, `toast`, `date picker`) or a UI scenario (e.g. "let users pick a date range").

## Workflow

### Step 1 — Look up the component

Call `mcp__ux-components__lookup` with the component name or scenario.

```
query: "<component name or scenario>"
format: "markdown"
```

This returns anatomy, states, usage guidance, and cross-system naming. Use this as the foundation of the docs.

### Step 2 — Get alternatives (if relevant)

If the lookup reveals close alternatives (e.g. Select vs Combobox, Dialog vs Sheet), call `mcp__ux-components__compare` to document the tradeoffs:

```
query: "<component> vs <alternative>"
format: "markdown"
```

Include a concise "When to use X vs Y" section in the output.

### Step 3 — Check for scenario fit (if input was a scenario)

If the user described a scenario rather than a named component, use `mcp__ux-components__recommend` to confirm the best fit:

```
scenario: "<user scenario>"
format: "markdown"
```

Use the recommendation reasoning in the "Usage guidance" section.

## Output Format

Produce a single markdown document with this structure:

```markdown
# <Component Name>

> <One-line description of what the component is and its primary purpose.>

## Overview

<2-3 sentences on the component's role in UI, when it appears, and the user problem it solves.>

## Anatomy

<List the key parts of the component (trigger, panel, option, etc.) with a brief description of each.>

## States

<Table or list of states (default, hover, focused, disabled, loading, error, empty, etc.) and what each communicates to the user.>

## Usage guidelines

### Use when
- <scenario>
- <scenario>

### Don't use when
- <scenario — prefer X instead>

## Variants

<List common variants (sizes, styles, controlled/uncontrolled) if applicable.>

## Accessibility

<Key ARIA roles, keyboard interactions, and focus management requirements.>

## Design system naming

| Design System | Name |
|---|---|
| Material Design | … |
| Atlassian | … |
| Radix / shadcn | … |
| Ant Design | … |
| … | … |

## When to use this vs alternatives

<Only include if close alternatives exist. Brief table or bullet list with the decision rule.>
```

## Notes

- Keep descriptions concise — this is reference documentation, not prose.
- If the component is ambiguous (e.g. "dropdown" maps to multiple patterns), note the ambiguity and document the most common interpretation, then briefly mention the others.
- Do not invent states or anatomy not returned by the MCP — only document what the data supports.
