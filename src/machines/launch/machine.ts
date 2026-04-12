import { setup, assign } from "xstate"

import { assignConfig } from "./actions/assignConfig"
import { assignConfigPath } from "./actions/assignConfigPath"
import { logEvent } from "./actions/logEvent"
import { readConfig } from "./actors/readConfig"
import { resolveConfig } from "./actors/resolveConfig"

import type { LaunchMachineContext, LaunchMachineEvents } from "./types"

export const launchMachine = setup({
  types: {} as {
    context: LaunchMachineContext
    events: LaunchMachineEvents
  },
  actors: { "resolve config": resolveConfig, "read config": readConfig },
  actions: {
    "assign config path": assign(assignConfigPath),
    "assign config": assign(assignConfig),
    "log event": logEvent
  }
}).createMachine({
  id: "launchMachine",
  initial: "resolvingConfig",
  context: {},
  states: {
    resolvingConfig: {
      invoke: {
        src: "resolve config",
        onDone: {
          actions: ["assign config path"],
          target: "readingConfig"
        },
        onError: {
          actions: ["log event"],
          target: "error"
        }
      }
    },

    readingConfig: {
      invoke: {
        src: "read config",
        input: ({ context }) => context,
        onDone: {
          actions: ["assign config"],
          target: "idle"
        },
        onError: {
          actions: ["log event"],
          target: "error"
        }
      }
    },

    idle: {},

    error: {}
  }
})
