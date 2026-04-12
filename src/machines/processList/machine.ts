import { assign, setup } from "xstate"

import { assignNavigation } from "./actions/assignNavigation"

import type { ProcessListMachineContext, ProcessListMachineEvents } from "./types"

export const processListMachine = setup({
  types: {} as {
    context: ProcessListMachineContext
    events: ProcessListMachineEvents
  },
  actions: {
    "assign navigation": assign(assignNavigation)
  }
}).createMachine({
  id: "processListMachine",
  initial: "idle",
  context: ({ input }) => ({ ...input, selectedIndex: 0 }),
  states: {
    idle: {
      on: {
        "key.press": {
          actions: ["assign navigation"]
        }
      }
    }
  }
})
