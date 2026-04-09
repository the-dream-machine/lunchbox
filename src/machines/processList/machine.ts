import { setup, assign } from "xstate";
import type { KeyEvent } from "@opentui/core";
import type {
  ProcessListMachineContext,
  ProcessListMachineEvents,
  ProcessListMachineInput,
} from "./types";
import { assignFocusedIndex } from "./actions/assignFocusedIndex";
import { assignSelectedProcess } from "./actions/assignSelectedProcess";
import { updateProcesses } from "./actions/updateProcesses";

// Helper to determine what navigation event to raise from a keypress
const keyToNavigationEvent = (
  context: ProcessListMachineContext,
  key: KeyEvent
): ProcessListMachineEvents | undefined => {
  const maxIndex = Math.max(0, context.processes.length - 1);

  switch (key.name) {
    case "up":
      return context.focusedIndex > 0 ? { type: "navigate.up" } : undefined;
    case "down":
      return context.focusedIndex < maxIndex ? { type: "navigate.down" } : undefined;
    case "home":
      return { type: "navigate.first" };
    case "end":
      return { type: "navigate.last" };
    case "return":
      return { type: "confirm" };
    case "space":
      return { type: "select" };
    default:
      return undefined;
  }
};

export const processListMachine = setup({
  types: {} as {
    context: ProcessListMachineContext;
    events: ProcessListMachineEvents;
    input: ProcessListMachineInput;
  },
  actions: {
    "assign focused index": assign(assignFocusedIndex),
    "assign selected process": assign(assignSelectedProcess),
    "update processes": assign(updateProcesses),
    "handle keypress": (
      { context, self },
      params: { key: KeyEvent }
    ) => {
      const navEvent = keyToNavigationEvent(context, params.key);
      if (navEvent && self) {
        self.send(navEvent);
      }
    },
  },
  guards: {
    "has processes": ({ context }) => context.processes.length > 0,
    "can navigate up": ({ context }) => context.focusedIndex > 0,
    "can navigate down": ({ context }) =>
      context.focusedIndex < context.processes.length - 1,
  },
}).createMachine({
  id: "processListMachine",
  initial: "idle",
  context: ({ input }) => ({
    processes: input.processes,
    focusedIndex: input.initialIndex ?? 0,
    selectedProcess: undefined,
    scrollOffset: 0,
    launchRef: input.launchRef,
  }),
  states: {
    idle: {
      on: {
        keypress: {
          actions: {
            type: "handle keypress",
            params: ({ event }: { event: ProcessListMachineEvents }) => {
              if (event.type === "keypress") {
                return { key: event.key };
              }
              return { key: { name: "" } as KeyEvent };
            },
          },
        },
        "navigate.up": {
          guard: "can navigate up",
          actions: "assign focused index",
        },
        "navigate.down": {
          guard: "can navigate down",
          actions: "assign focused index",
        },
        "navigate.first": {
          guard: "has processes",
          actions: "assign focused index",
        },
        "navigate.last": {
          guard: "has processes",
          actions: "assign focused index",
        },
        "navigate.to": {
          guard: "has processes",
          actions: "assign focused index",
        },
        select: {
          guard: "has processes",
          actions: "assign selected process",
        },
        confirm: {
          guard: "has processes",
          actions: "assign selected process",
        },
        "processes.update": {
          actions: "update processes",
        },
      },
    },
  },
});
