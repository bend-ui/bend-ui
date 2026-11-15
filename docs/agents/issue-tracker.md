# Issue tracker: Linear

Issues and PRDs for this repo live in Linear, in the **Bend UI** project (`P-BEN-1`) of the **Benoit Deziel** team (key `BEN`). Issue identifiers look like `BEN-146`. Use the Linear MCP tools (`list_issues`, `get_issue`, `save_issue`, `save_comment`, and so on) for all operations. Do not file GitHub issues; GitHub is only used for code and pull requests.

## Conventions

- **Create an issue**: `save_issue` with `team: "BEN"`, `project: "Bend UI"`, a `title`, and a markdown `description`. Add a type label (`Feature`, `Bug`, or `Improvement`) plus any triage label from `triage-labels.md`.
- **Read an issue**: `get_issue` with the identifier (e.g. `BEN-146`), then `list_comments` for the discussion.
- **List issues**: `list_issues` with `project: "Bend UI"` and the appropriate `state`, `label`, or `assignee` filters.
- **Comment on an issue**: `save_comment` with the issue identifier and a markdown `body`.
- **Apply / remove labels**: `save_issue` with the issue `id` and `addLabels` / `removeLabels` (avoid `labels`, which replaces the whole set). If a triage label doesn't exist yet, create it as a team label on `BEN` before applying it.
- **Close**: post the explanation with `save_comment`, then `save_issue` with `state: "Done"` (or `"Canceled"` for `wontfix`).
- **Parent / sub-issues**: set `parentId` on the child (e.g. `parentId: "BEN-65"`).
- **Blocking**: set `blockedBy` on the child (or `blocks` on the blocker) with issue identifiers. A ticket is unblocked when every blocker is in a completed or canceled state.

To link a pull request to an issue, put the identifier in the branch name (Linear's `gitBranchName` field) or a magic word in the PR body, e.g. `Fixes BEN-146`.

## Pull requests as a triage surface

**PRs as a request surface: no.** _(Set to `yes` if this repo treats external GitHub PRs as feature requests; `/triage` reads this flag.)_

When set to `yes`, read PRs with `gh pr view <number> --comments` and `gh pr diff <number>`, and file a Linear issue for any PR that should be tracked.

## When a skill says "publish to the issue tracker"

Create a Linear issue in the Bend UI project with `save_issue`.

## When a skill says "fetch the relevant ticket"

Call `get_issue` with the `BEN-<n>` identifier, then `list_comments`.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a single parent issue with **child** issues as tickets.

- **Map**: a single issue labelled `wayfinder:map`, holding the Notes / Decisions-so-far / Fog body.
- **Child ticket**: an issue with `parentId` set to the map. Labels: `wayfinder:<type>` (`research`/`prototype`/`grilling`/`task`). Once claimed, the ticket is assigned to the driving dev.
- **Blocking**: Linear's native `blockedBy` relations on the child.
- **Frontier query**: `list_issues` with `parentId` set to the map and an open state, drop any with an open blocker or an assignee; first in map order wins.
- **Claim**: `save_issue` with `assignee: "me"`, the session's first write.
- **Resolve**: `save_comment` with the answer, then `save_issue` with `state: "Done"`, then append a context pointer (gist + link) to the map's Decisions-so-far.
