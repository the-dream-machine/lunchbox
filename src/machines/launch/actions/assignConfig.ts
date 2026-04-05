import type { LaunchMachineActionArgs, LaunchMachineContext } from "../types";

export const assignConfig = ({
  event,
}: LaunchMachineActionArgs): Partial<LaunchMachineContext> => {
  switch (event.type) {
    case "xstate.done.actor.0.launchMachine.readConfig":
      return { config: event.output };

    default:
      return {};
  }
};
