import type { LaunchMachineActionArgs } from "../types"

export const logEvent = ({ event }: LaunchMachineActionArgs) =>
  console.log("Launch machine event:", event)
