import { createActorContext } from "@xstate/react"

import { processListMachine } from "~/src/machines/processList/machine"

export const ProcessListMachineContext = createActorContext(processListMachine)
