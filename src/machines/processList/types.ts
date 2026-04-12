import type { KeyEvent } from "@opentui/core";
import type { ActorRefFrom } from "xstate";
import type { launchMachine } from "../launch/machine";

export interface Process {
  name: string;
  shell: string;
  autostart: boolean;
}

export interface ProcessListMachineContext {
  /** Array of processes to navigate through */
  processes: Process[];
  /** Currently focused index in the list */
  focusedIndex: number;
  /** The currently selected process (confirmed selection) */
  selectedProcess?: string;
  /** Scroll offset for virtual scrolling if needed */
  scrollOffset?: number;
  /** Reference to parent launch machine for sending selection events */
  launchRef?: ActorRefFrom<typeof launchMachine>;
}

export interface ProcessListMachineInput {
  /** Initial array of processes */
  processes: Process[];
  /** Initial focused index (defaults to 0) */
  initialIndex?: number;
  /** Reference to parent launch machine */
  launchRef?: ActorRefFrom<typeof launchMachine>;
}

export type ProcessListMachineEvents =
  // Raw keypress event from keyboard listener (native @opentui/core KeyEvent)
  | { type: "keypress"; key: KeyEvent }
  // Navigation events (internal)
  | { type: "navigate.up" }
  | { type: "navigate.down" }
  | { type: "navigate.first" }
  | { type: "navigate.last" }
  // Direct navigation (for programmatic control)
  | { type: "navigate.to"; index: number }
  // Selection events
  | { type: "select" }
  | { type: "confirm" }
  // List management events
  | { type: "processes.update"; processes: Process[] };

export interface ProcessListMachineActionArgs {
  context: ProcessListMachineContext;
  event: ProcessListMachineEvents;
}

// Re-export KeyEvent for convenience
export type { KeyEvent };
