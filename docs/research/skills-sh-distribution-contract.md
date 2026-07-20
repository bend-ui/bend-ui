# skills.sh distribution contract

Research date: 2026-07-19

## Question

How should this repository package a distributable design-system skill so the
`skills` CLI and skills.sh can discover it, while the repository also exposes
the same skill to Codex and Claude Code without maintaining duplicate sources?

## Findings

### Keep distributable skills under the root `skills/` directory

The `skills` CLI treats `skills/` as a standard discovery container. It walks
the common flat layout `skills/<name>/SKILL.md` and also supports one additional
category level. The root `skills/` container is searched before agent-specific
containers such as `.agents/skills/` and `.claude/skills/`. A repository may
contain several skills; no repository-level manifest is required for this
layout. [The official CLI documentation describes the search order and depth.](https://github.com/vercel-labs/skills/blob/main/README.md#skill-discovery)

Use this canonical layout:

```text
skills/
└── create-theme-personality/
    ├── SKILL.md
    ├── scripts/       # optional
    ├── references/    # optional
    └── assets/        # optional
```

This also matches the Agent Skills specification: a skill is a directory with
a required `SKILL.md` and may include supporting `scripts/`, `references/`, and
`assets/` directories. [The specification defines this directory structure.](https://agentskills.io/specification#directory-structure)

### `SKILL.md` is the package manifest

`SKILL.md` must begin with YAML frontmatter and then contain Markdown
instructions. The portable required fields are:

```yaml
---
name: create-theme-personality
description: Describe what the skill does and the situations that should activate it.
---
```

The specification constrains `name` to 1–64 lowercase alphanumeric or hyphen
characters, without leading, trailing, or consecutive hyphens, and requires it
to match the parent directory. `description` is 1–1024 characters and should
say both what the skill does and when to use it. Optional portable frontmatter
fields are `license`, `compatibility`, `metadata`, and experimental
`allowed-tools`. [The Agent Skills specification is the authoritative field reference.](https://agentskills.io/specification#frontmatter)

The `skills` CLI only accepts a discovered skill when `name` and `description`
are present and are strings. [Its parser enforces those two fields.](https://github.com/vercel-labs/skills/blob/main/src/skills.ts)

No separate skills.sh manifest or publication step is documented. skills.sh is
powered by the open-source `skills` CLI and its public documentation tells
users to install from an `owner/repo` source. [skills.sh documents that install model directly.](https://skills.sh/docs)

### Supported install commands

For this repository, list what the CLI discovers before publishing installation
instructions:

```bash
npx skills add bend-ui/bend-ui --list
```

Install the named skill from the repository:

```bash
npx skills add bend-ui/bend-ui --skill create-theme-personality
```

Or point directly at the skill directory on the default branch:

```bash
npx skills add https://github.com/bend-ui/bend-ui/tree/main/skills/create-theme-personality
```

The CLI officially supports GitHub `owner/repo` shorthand, full GitHub URLs,
direct repository paths, and `--skill` selection. `-g` changes the installation
from project scope to user scope; `-a codex` and `-a claude-code` select agents;
`-y` makes the operation non-interactive. [The source formats, flags, and examples are maintained in the CLI README.](https://github.com/vercel-labs/skills/blob/main/README.md#source-formats)

For example, a non-interactive global install for both supported agents is:

```bash
npx skills add bend-ui/bend-ui --skill create-theme-personality \
  -g -a codex -a claude-code -y
```

### Use relative directory symlinks only as repository-local discovery mirrors

The repository can keep one authored copy and expose it to local agents with:

```text
.agents/skills/create-theme-personality -> ../../skills/create-theme-personality
.claude/skills/create-theme-personality -> ../../skills/create-theme-personality
```

These should be relative **directory** symlinks committed alongside the real
`skills/create-theme-personality/` directory. The root `skills/` copy remains
the distribution source, so remote discovery does not depend on following the
mirrors. This matters because the CLI's standard container walk accepts real
directory entries and does not descend into a symlinked directory entry; the
canonical root skill is nevertheless discovered first. [The discovery implementation filters entries with `Dirent.isDirectory()`.](https://github.com/vercel-labs/skills/blob/main/src/skills.ts)

The CLI's installation symlinks are a separate concern. In its default symlink
mode it copies a selected source skill into the canonical project or global
`.agents/skills/<name>` store, then links agent-specific locations to that
canonical copy; `--copy` requests independent copies instead. Its copy routine
dereferences symlinked files and directories, and skips broken symlinks. [The installer source documents and implements canonical-copy plus agent-link behavior.](https://github.com/vercel-labs/skills/blob/main/src/installer.ts) The CLI README recommends symlinks as the single-source-of-truth installation method. [See Installation Methods.](https://github.com/vercel-labs/skills/blob/main/README.md#installation-methods)

## Recommended contract for Bend UI

1. Author every public design-system skill only in `skills/<skill-name>/`.
2. Make the first package `skills/create-theme-personality/SKILL.md` and keep its
   `name` exactly equal to `create-theme-personality`.
3. Add relative directory symlinks for that skill under `.agents/skills/` and
   `.claude/skills/`; do not duplicate files and do not make the remote install
   depend on those mirrors.
4. Validate frontmatter against the Agent Skills specification, then prove
   discovery with `npx skills add bend-ui/bend-ui --list` and prove the direct
   path installation in a temporary project before documenting it.
5. Publish the repository-level `--skill create-theme-personality` command as
   the normal installation path and retain the direct GitHub tree URL as the
   unambiguous fallback.

## Caveat

The official material describes discovery and installation, but does not
promise that an arbitrary repository will automatically receive a browsable
skills.sh catalog page merely because it contains `skills/*/SKILL.md`. Treat
successful CLI discovery and installation as the release contract; verify
skills.sh catalog appearance separately after the public repository content is
available and installs have been recorded.
