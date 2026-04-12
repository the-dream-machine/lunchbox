import { LaunchMachineContext } from "../LaunchMachineProvider"
import { ProcessListContent } from "./ProcessListContent"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessList = () => {
  const config = LaunchMachineContext.useSelector((state) => state.context.config)
  const isReadingConfig = LaunchMachineContext.useSelector((state) =>
    state.matches("readingConfig")
  )
  const isResolvingConfig = LaunchMachineContext.useSelector((state) =>
    state.matches("resolvingConfig")
  )
  const isLoading = isReadingConfig || isResolvingConfig

  if (isLoading) return null

  return (
    <ProcessListMachineContext.Provider options={{ input: { config } }}>
      <ProcessListContent />
    </ProcessListMachineContext.Provider>
  )
}
