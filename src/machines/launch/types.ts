import type { DoneActorEvent, ErrorActorEvent, OutputFrom } from "xstate";
import type { readConfig } from "./actors/readConfig";
import type { resolveConfig } from "./actors/resolveConfig";

export type LaunchMachineContext = {
  configPath?: OutputFrom<typeof resolveConfig>;
  config?: OutputFrom<typeof readConfig>;
  activeProc?: string;
};

export type LaunchMachineEvents =
  // Done events
  | (DoneActorEvent<OutputFrom<typeof resolveConfig>> & {
      type: "xstate.done.actor.0.launchMachine.resolvingConfig";
    })
  | (DoneActorEvent<OutputFrom<typeof readConfig>> & {
      type: "xstate.done.actor.0.launchMachine.readingConfig";
    })

  // Error events
  | (ErrorActorEvent<Error> & {
      type: "xstate.error.actor.0.launchMachine.resolvingConfig";
    })
  | (ErrorActorEvent<Error> & {
      type: "xstate.error.actor.0.launchMachine.readingConfig";
    })

  // Proc events
  | { type: "proc.click"; name: string }
  | { type: "proc.select"; name: string };

export interface LaunchMachineActionArgs {
  context: LaunchMachineContext;
  event: LaunchMachineEvents;
}
