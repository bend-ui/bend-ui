# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Layout

This is a single-context repo.

- Read `CONTEXT.md` at the repo root before architecture work, broad refactors, documentation planning, or adding new package adapters.
- Read `docs/adr/` for architectural decisions relevant to the area being changed.

## Use the glossary's vocabulary

When output names a domain concept, use the term as defined in `CONTEXT.md`. Do not drift to synonyms when the glossary already defines a term.

If a needed concept is missing from the glossary, either reconsider the language or note it for `grill-with-docs`.

## Flag ADR conflicts

If output contradicts an existing ADR, surface it explicitly rather than silently overriding it.
