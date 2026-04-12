import type { KeyEvent } from "@opentui/core"
import type { Config, Process } from "~/src/library/config/schema"

export type { Process }

export interface ProcessListMachineInput {
  config?: Config
}

export interface ProcessListMachineContext extends ProcessListMachineInput {
  selectedIndex: number
}

export type ProcessListMachineEvents = { type: "key.press"; params: KeyEvent }

export interface ProcessListMachineActionArgs {
  context: ProcessListMachineContext
  event: ProcessListMachineEvents
}
