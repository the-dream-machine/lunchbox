import { createActorContext } from "@xstate/react";
import { launchMachine } from "~src/machines/launch/machine";

console.log("🚀 launchMachine ~ :", launchMachine);
export const LaunchMachineContext = createActorContext(launchMachine);
