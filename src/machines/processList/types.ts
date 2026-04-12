import type { Config } from "~/src/library/config/schema"

export interface ProcessListMachineInput {
  config: Config
}

export interface ProcessListMachineContext extends ProcessListMachineInput {}
