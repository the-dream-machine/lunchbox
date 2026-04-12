import type {
  ProcessListMachineContext,
  ProcessListMachineActionArgs,
} from "../types";

export const assignSelectedProcess = ({
  context,
  event,
}: ProcessListMachineActionArgs): Partial<ProcessListMachineContext> => {
  const { processes, focusedIndex } = context;

  switch (event.type) {
    case "select":
    case "confirm": {
      const process = processes[focusedIndex];
      return process ? { selectedProcess: process.name } : {};
    }

    default:
      return {};
  }
};
