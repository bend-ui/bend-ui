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

## Required validation

Run `pnpm validate` locally and in CI to build, lint, test, and type-check affected
projects. Nx uses `NX_BASE` / `NX_HEAD` in CI; locally it compares against `main`
and includes working-tree changes. Use `pnpm validate:all` for the full active
workspace. Both commands exclude `status:parked`; currently only Ariakit carries
that tag. Config, the Docs site, the Ark and Base UI demos, the customization
harness, and the migrated Panda playground are included.

Tests and type checks build their workspace dependencies first. Apps generate
their own Styled system before consuming it. The Docs site also generates its
Fumadocs content, and Next.js app type checks follow the production build so
route declarations exist on a fresh checkout. Do not rely on install-time
`prepare` scripts or generated files left over from a previous Panda version.
The Next.js apps use webpack with extension aliases so workspace TypeScript
sources can retain the `.js` imports used by their published builds.

The packed-consumer directory is a template, not an independently installed app.
It is excluded from inferred TypeScript targets; its type contracts run inside
`pnpm nx run panda-consumer:verify`. CI keeps that isolated verification as a
separate required step. Export checks and browser E2E runs remain separate from
the build/lint/test/typecheck gate.

The Docs site and playground use Vitest, like the other React apps, so their tests
can load Panda's ESM output and use the automatic JSX transform. Preserve tests
at the rendered interface when changing generated-helper resolution.

## Visual checks on dependency updates

Base UI Chromatic builds also run on `renovate/**` and `dependabot/**` branches
when relevant package, lockfile, Storybook, or workspace configuration changes.
Ark UI and React Aria visual workflows remain available manually.

GitHub supplies Dependabot secrets separately from Actions secrets. Configure
`CHROMATIC_BASE_UI` as a repository Dependabot secret as well as an Actions secret
before relying on Dependabot visual checks. Never use `pull_request_target` to
build untrusted dependency-update code with the repository's Actions secrets.
