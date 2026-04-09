import type { LaunchMachineActionArgs, LaunchMachineContext } from "../types";

export const assignActiveProcess = ({
  event,
}: LaunchMachineActionArgs): Partial<LaunchMachineContext> => {
  switch (event.type) {
    case "process.click":
    case "process.select":
      return { activeProcess: event.name };

    default:
      return {};
  }
};
