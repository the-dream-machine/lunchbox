import type { ProcessListMachineActionArgs, ProcessListMachineContext } from "../types"

export const assignFocusedIndex = ({
  context,
  event
}: ProcessListMachineActionArgs): Partial<ProcessListMachineContext> => {
  const { processes, focusedIndex } = context
  const maxIndex = Math.max(0, processes.length - 1)

  switch (event.type) {
    case "navigate.up":
      return { focusedIndex: Math.max(0, focusedIndex - 1) }

    case "navigate.down":
      return { focusedIndex: Math.min(maxIndex, focusedIndex + 1) }

    case "navigate.first":
      return { focusedIndex: 0 }

    case "navigate.last":
      return { focusedIndex: maxIndex }

    case "navigate.to":
      return { focusedIndex: Math.max(0, Math.min(maxIndex, event.index)) }

    default:
      return {}
  }
}
