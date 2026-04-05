import { setup, assign, log } from "xstate";
import type { LaunchMachineContext, LaunchMachineEvents } from "./types";
import { resolveConfig } from "./actors/resolveConfig";
import { readConfig } from "./actors/readConfig";
import { assignConfigPath } from "./actions/assignConfigPath";
import { assignConfig } from "./actions/assignConfig";

export const launchMachine = setup({
  types: {} as {
    context: LaunchMachineContext;
    events: LaunchMachineEvents;
  },
  actors: { "resolve config": resolveConfig, "read config": readConfig },
  actions: {
    "assign config path": assign(assignConfigPath),
    "assign config": assign(assignConfig),
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
          target: "error",
        },
      },
    },

    idle: {
      type: "final",
    },

    error: {
      type: "final",
    },
  },
});
