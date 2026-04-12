import { ProcessListItem } from "./ProcessListItem"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessListContent = () => {
  const processes = ProcessListMachineContext.useSelector((state) => state.context.config.processes)

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
        {processes.map((process) => (
          <ProcessListItem key={process.name} name={process.name} />
        ))}
      </box>
    </box>
  )
}
