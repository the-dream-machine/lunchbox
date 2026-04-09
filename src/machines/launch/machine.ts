import { setup, assign } from "xstate";
import type { LaunchMachineContext, LaunchMachineEvents } from "./types";
import { resolveConfig } from "./actors/resolveConfig";
import { readConfig } from "./actors/readConfig";
import { assignConfigPath } from "./actions/assignConfigPath";
import { assignConfig } from "./actions/assignConfig";
import { assignActiveProcess } from "./actions/assignActiveProcess";
import { logEvent } from "./actions/logEvent";

export const launchMachine = setup({
  types: {} as {
    context: LaunchMachineContext;
    events: LaunchMachineEvents;
  },
  actors: { "resolve config": resolveConfig, "read config": readConfig },
  actions: {
    "assign config path": assign(assignConfigPath),
    "assign config": assign(assignConfig),
    "assign active process": assign(assignActiveProcess),
    "log event": logEvent,
  },
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
          target: "readingConfig",
        },
        onError: {
          actions: ["log event"],
          target: "error",
        },
      },
    },

    readingConfig: {
      invoke: {
        src: "read config",
        input: ({ context }) => context,
        onDone: {
          actions: ["assign config"],
          target: "idle",
        },
        onError: {
          actions: ["log event"],
          target: "error",
        },
      },
    },

    idle: {
      on: {
        "process.click": { actions: ["assign active process"] },
        "process.select": { actions: ["assign active process"] },
      },
    },

    error: {},
  },
});
