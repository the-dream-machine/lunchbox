import { createActorContext } from "@xstate/react"

import { launchMachine } from "~/src/machines/launch/machine"

export const LaunchMachineContext = createActorContext(launchMachine)
