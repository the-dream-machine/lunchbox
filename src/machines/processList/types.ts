export interface Process {
  name: string
  shell: string
  autostart: boolean
}

export interface ProcessListMachineContext {
  processes: Process[]
}

export interface ProcessListMachineInput {
  processes: Process[]
}

export type ProcessListMachineEvents = { type: "processes.update"; processes: Process[] }

export interface ProcessListMachineActionArgs {
  context: ProcessListMachineContext
  event: ProcessListMachineEvents
}
