import type { LaunchMachineActionArgs, LaunchMachineContext } from "../types";

export const assignConfigPath = ({
  event,
}: LaunchMachineActionArgs): Partial<LaunchMachineContext> => {
  switch (event.type) {
    case "xstate.done.actor.0.launchMachine.resolvingConfig":
      console.log("Resolved config path:", event.output);
      return { configPath: event.output };

    default:
      return {};
  }
};
