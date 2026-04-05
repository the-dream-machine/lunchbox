import type { DoneActorEvent, ErrorActorEvent, OutputFrom } from "xstate";
import type { readConfig } from "./actors/readConfig";

export type LaunchMachineContext = {
  config?: OutputFrom<typeof readConfig>;
};

export type LaunchMachineEvents =
  // Done events
  | (DoneActorEvent<OutputFrom<typeof readConfig>> & {
      type: "xstate.done.actor.0.launchMachine.readConfig";
    })

  // Error events
  | (ErrorActorEvent<Error> & {
      type: "xstate.error.actor.0.launchMachine.readConfig";
    });

export interface LaunchMachineActionArgs {
  context: LaunchMachineContext;
  event: LaunchMachineEvents;
}
