import { LaunchMachineContext } from "../LaunchMachineProvider"
import { ProcessListContent } from "./ProcessListContent"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessList = () => {
  const processes = LaunchMachineContext.useSelector(
    (state) => state.context.config?.processes ?? []
  )

  return (
    <ProcessListMachineContext.Provider options={{ input: { processes } }}>
      <ProcessListContent />
    </ProcessListMachineContext.Provider>
  )
}
