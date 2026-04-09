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
