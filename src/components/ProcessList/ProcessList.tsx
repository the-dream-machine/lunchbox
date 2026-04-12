import { LaunchMachineContext } from "../LaunchMachineProvider"
import { ProcessListContent } from "./ProcessListContent"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessList = () => {
  const config = LaunchMachineContext.useSelector(
    (state) => state.context.config
  )

  if (!config) {
    return null
  }

  return (
    <ProcessListMachineContext.Provider options={{ input: { config } }}>
      <ProcessListContent />
    </ProcessListMachineContext.Provider>
  )
}
