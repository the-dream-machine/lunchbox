import { setup, assign } from "xstate";
import type {
  ProcessListMachineContext,
  ProcessListMachineEvents,
  ProcessListMachineInput,
} from "./types";
import { updateProcesses } from "./actions/updateProcesses";

export const processListMachine = setup({
  types: {} as {
    context: ProcessListMachineContext;
    events: ProcessListMachineEvents;
    input: ProcessListMachineInput;
  },
  actions: {
    "update processes": assign(updateProcesses),
  },
}).createMachine({
  id: "processListMachine",
  initial: "idle",
  context: ({ input }) => ({
    processes: input.processes,
  }),
  states: {
    idle: {
      on: {
        "processes.update": {
          actions: "update processes",
        },
      },
    },
  },
});
