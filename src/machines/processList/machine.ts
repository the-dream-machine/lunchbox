import { setup } from "xstate"

import type { ProcessListMachineContext, ProcessListMachineInput } from "./types"

export const processListMachine = setup({
  types: {} as {
    context: ProcessListMachineContext
    input: ProcessListMachineInput
  },
  actions: {}
}).createMachine({
  id: "processListMachine",
  initial: "idle",
  context: ({ input }) => ({ ...input }),
  states: {
    idle: {}
  }
})
