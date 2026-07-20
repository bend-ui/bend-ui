# 🧬 Bend UI

Design system tools for React

> 🚧 This is a proof of concept, the API is subject to change

## Packages

- `@bend-ui/base-ui` - the Base UI package adapter
- `@bend-ui/preset` - the Bend UI design preset
- `@bend-ui/config` - Panda configuration helpers
- `@bend-ui/styled-system` - generated Panda runtime helpers
- `@bend-ui/theme` - theme assets

## Development

- [Testing conventions](docs/testing.md)

### Nx Cloud authentication

Nx Cloud credentials must not be committed to the repository.

- For local development, add `NX_CLOUD_ACCESS_TOKEN=<token>` to an ignored
  `nx-cloud.env` file at the workspace root. Alternatively, run `nx login` to
  use a personal access token.
- In GitHub Actions, configure an `NX_CLOUD_ACCESS_TOKEN` secret. The build
  workflow exposes it to Nx through the environment.

Secrets are unavailable to workflows triggered from forks, so those runs fall
back to the local Nx cache. Rotate or revoke credentials immediately if they
are ever committed.
