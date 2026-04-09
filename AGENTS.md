# Lunchbox

A TUI process manager built with OpenTUI and XState.

## General Guidelines

- Use mise to run scripts

## xstate state machines

### Guidelines

- Components read machine state via selectors and send raw events
- All business/navigation logic lives in machines
- Machines receive raw inputs (e.g., keypress) and interpret internally
- Use native types from dependencies (e.g., `KeyEvent` from @opentui/core)
- Prefer creating actors and actions in individual files instead of defining them inline

## Structure

- `machine.ts` - Machine definition with `setup()` and `createMachine()`
- `types.ts` - Context, events, input types
- `actions/` - Assign functions and side effects
- `actors/` - Promise-based async operations and actors
- `index.ts` - Public exports
- Create machine context with `createActorContext()` in a separate provider file

## Git

### General git rules

- Never run `git commit` or `git push` unless explicitly requested by the user
- Never use destructive git commands such as `git reset --hard`, `git checkout --`, `git clean -fd`, `git revert`, or `git force push`
- Do not amend, squash, or rebase commits
- Do not delete branches or tags
- Read-only git commands (e.g., `git status`, `git log`, `git diff`, `git branch`, `git remote -v`) are allowed

### Git commit message guidelines

- Only consider the staged files. Ignore unstaged files.
- Separate the subject from the body with a blank line
- Try to limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with any punctuation
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Keep the body short and concise (omit it entirely if not useful)
- The subject line should follow the format: feat/fix/chore/refactor: <subject>
- Use bullet points to list the changes line by line.
