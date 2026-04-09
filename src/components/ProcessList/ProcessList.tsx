import { LaunchMachineContext } from "../LaunchMachineProvider"
import { ProcessListContent } from "./ProcessListContent"
import { ProcessListMachineContext } from "./ProcessListMachineProvider"

import type { ProcessListMachineInput } from "../../machines/processList/types"

export const ProcessList = () => {
  const launchRef = LaunchMachineContext.useActorRef()
  const config = LaunchMachineContext.useSelector((state) => state.context.config)
  const activeProcess = LaunchMachineContext.useSelector((state) => state.context.activeProcess)

  return (
    <ProcessListMachineContext.Provider options={{ input: { processes, initialIndex, launchRef } }}>
      <ProcessListContent activeProcess={activeProcess} launchRef={launchRef} />
    </ProcessListMachineContext.Provider>
  )
}
