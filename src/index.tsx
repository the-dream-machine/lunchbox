import { ConsolePosition, createCliRenderer } from "@opentui/core"
import { createRoot } from "@opentui/react"

import { LaunchMachineContext } from "./components/LaunchMachineProvider"
import { Page } from "./components/Page"
import { ProcessList } from "./components/ProcessList/ProcessList"

const App = () => {
  return (
    <LaunchMachineContext.Provider>
      <box flexDirection="row" width="100%" height="100%">
        <ProcessList />
        <Page />
      </box>
    </LaunchMachineContext.Provider>
  )
}

const renderer = await createCliRenderer({
  screenMode: "alternate-screen",
  consoleOptions: {
    position: ConsolePosition.BOTTOM,
    sizePercent: 30
  }
})
createRoot(renderer).render(<App />)
