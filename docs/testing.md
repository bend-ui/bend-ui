# Testing conventions

## Test file names

Use `.spec` for new test files throughout the workspace:

- React component tests: `<ComponentName>.spec.tsx`
- TypeScript unit tests: `<module-name>.spec.ts`
- Qualified suites: `<feature>.<qualifier>.spec.ts`, such as
  `dental-management.visual.spec.ts`

The project or directory identifies the kind of test (unit, integration, or end-to-end).
Do not use `.test` and `.spec` to encode different test levels.

Vitest and Playwright configurations continue to recognize both `.spec` and `.test`
while existing `.test` files remain in the workspace. Rename those files opportunistically
when touching them, or together in a dedicated consistency change; a standalone migration
is not required before adding new tests.

