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
      const selectedProcess = processes[focusedIndex];
      return selectedProcess ? { selectedProcess } : {};
    }

    default:
      return {};
  }
};
