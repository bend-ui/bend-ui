# 🧬 Bend UI

Design system tools for React

> 🚧 This is a proof of concept, the API is subject to change

## Packages

- `@bend-ui/primitives` - component primitives
- `@bend-ui/theme` - the default theme for Bend UI

## Development

- [Testing conventions](docs/testing.md)

### Nx Cloud authentication

Nx Cloud credentials must not be committed to the repository.

- For local development, add `NX_CLOUD_ACCESS_TOKEN=<token>` to an ignored
  `nx-cloud.env` file at the workspace root. Alternatively, run `nx login` to
  use a personal access token.
- In GitHub Actions, configure `NX_CLOUD_ACCESS_TOKEN_RW` with a read-write
  token for protected-branch pushes and `NX_CLOUD_ACCESS_TOKEN_RO` with a
  read-only token for pull requests. The build workflow selects the appropriate
  secret and exposes it to Nx as `NX_CLOUD_ACCESS_TOKEN`.

Secrets are unavailable to workflows triggered from forks, so those runs fall
back to the local Nx cache. Rotate or revoke credentials immediately if they
are ever committed.
