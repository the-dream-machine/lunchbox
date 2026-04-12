import { LaunchMachineContext } from "../LaunchMachineProvider"
import { ProcessListContent } from "./ProcessListContent"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

export const ProcessList = () => {
  const launchRef = LaunchMachineContext.useActorRef()
  const processes = LaunchMachineContext.useSelector(
    (state) => state.context.config?.processes ?? []
  )
  const activeProcess = LaunchMachineContext.useSelector((state) => state.context.activeProcess)

  return (
    <ProcessListMachineContext.Provider options={{ input: { launchRef, processes } }}>
      <ProcessListContent activeProcess={activeProcess} launchRef={launchRef} />
    </ProcessListMachineContext.Provider>
  )
}
