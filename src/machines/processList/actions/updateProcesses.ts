import type {
  ProcessListMachineContext,
  ProcessListMachineActionArgs,
} from "../types";

export const updateProcesses = ({
  event,
}: ProcessListMachineActionArgs): Partial<ProcessListMachineContext> => {
  if (event.type !== "processes.update") {
    return {};
  }

  return {
    processes: event.processes,
  };
};
