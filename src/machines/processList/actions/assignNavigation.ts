import type { ProcessListMachineActionArgs, ProcessListMachineContext } from "../types"

export const assignNavigation = ({
  context,
  event
}: ProcessListMachineActionArgs): Partial<ProcessListMachineContext> => {
  const { selectedIndex } = context
  const keyName = event.params.name
  const length = context.config?.processes.length ?? 0

  if (length === 0) return {}

  if (keyName === "up") {
    return { selectedIndex: (selectedIndex - 1 + length) % length }
  }

  if (keyName === "down") {
    return { selectedIndex: (selectedIndex + 1) % length }
  }

  return {}
}
