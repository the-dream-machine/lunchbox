import { ConsolePosition, createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";

import { Page } from "./components/Page";
import { LaunchMachineContext } from "./components/LaunchMachineProvider";

const App = () => {
  const launchActorRef = LaunchMachineContext.useActorRef();
  const config = LaunchMachineContext.useSelector(
    (state) => state.context.config,
  );
  const activeProcess = LaunchMachineContext.useSelector(
    (state) => state.context.activeProcess,
  );

  const processes = Object.keys(config?.processes ?? {});

  return (
    <box flexDirection="row" width="100%" height="100%">
      <ProcessList
        processes={processes}
        launchRef={launchActorRef}
        activeProcess={activeProcess}
      />
      <Page />
    </box>
  );
};

const Root = () => {
  return (
    <LaunchMachineContext.Provider>
      <App />
    </LaunchMachineContext.Provider>
  );
};

const renderer = await createCliRenderer({
  screenMode: "alternate-screen",
  consoleOptions: {
    position: ConsolePosition.BOTTOM,
    sizePercent: 30,
  },
});
createRoot(renderer).render(<Root />);
