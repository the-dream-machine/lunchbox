import { useKeyboard } from "@opentui/react"

import { ProcessListItem } from "./ProcessListItem"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessListContent = () => {
  const actorRef = ProcessListMachineContext.useActorRef()
  const config = ProcessListMachineContext.useSelector((state) => state.context.config)
  const selectedIndex = ProcessListMachineContext.useSelector(
    (state) => state.context.selectedIndex
  )
  const processes = config?.processes

  useKeyboard((event) => {
    actorRef.send({ type: "key.press", params: event })
  })

  return (
    <box
      paddingX={1}
      paddingY={1}
      minWidth={24}
      maxWidth={32}
      height="100%"
      flexShrink={0}
      border={["right"]}
      borderStyle="single"
      borderColor="#333333"
    >
      <text>🍱 Lunchbox</text>
      <box flexDirection="column" marginTop={1}>
        {processes?.map((process, index) => (
          <ProcessListItem
            key={process.name}
            name={process.name}
            selected={index === selectedIndex}
          />
        ))}
      </box>
    </box>
  )
}
