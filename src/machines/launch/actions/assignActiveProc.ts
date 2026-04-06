import type { LaunchMachineActionArgs, LaunchMachineContext } from "../types";

export const assignActiveProc = ({
  event,
}: LaunchMachineActionArgs): Partial<LaunchMachineContext> => {
  switch (event.type) {
    case "proc.click":
    case "proc.select":
      return { activeProc: event.name };

    default:
      return {};
  }
};
