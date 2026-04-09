import type {
  ProcessListMachineContext,
  ProcessListMachineActionArgs,
} from "../types";

export const updateProcesses = ({
  context,
  event,
}: ProcessListMachineActionArgs): Partial<ProcessListMachineContext> => {
  if (event.type !== "processes.update") {
    return {};
  }

  const newProcesses = event.processes;
  const currentFocusedProcess = context.processes[context.focusedIndex];

  // Try to maintain focus on the same process name if it still exists
  const newIndex = currentFocusedProcess
    ? newProcesses.indexOf(currentFocusedProcess)
    : -1;

  return {
    processes: newProcesses,
    focusedIndex: newIndex >= 0 ? newIndex : Math.min(context.focusedIndex, Math.max(0, newProcesses.length - 1)),
  };
};
