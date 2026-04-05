import { assign, setup } from "xstate";
import type { LaunchMachineContext, LaunchMachineEvents } from "./types";
import { readConfig } from "./actors/readConfig";
import type { Config } from "~src/library/config/schema";
import { assignConfig } from "./actions/assignConfig";

export const launchMachine = setup({
  types: {} as {
    context: LaunchMachineContext;
    events: LaunchMachineEvents;
  },
  actors: { "read config": readConfig },
  actions: { "assign config": assignConfig },
}).createMachine({
  id: "launchMachine",
  initial: "readingConfig",
  context: {},
  states: {
    readingConfig: {
      invoke: {
        src: "read config",
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
