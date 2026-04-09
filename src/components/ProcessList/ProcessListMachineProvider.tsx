import { createActorContext } from "@xstate/react";
import { processListMachine } from "../../machines/processList/machine";

export const ProcessListMachineContext = createActorContext(processListMachine);
