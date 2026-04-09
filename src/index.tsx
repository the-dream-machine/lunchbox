import { ConsolePosition, createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { ProcessList } from "./components/ProcessList";
import { Page } from "./components/Page";
import { LaunchMachineContext } from "./components/LaunchMachineProvider";

const App = () => {
  return (
    <LaunchMachineContext.Provider>
      <box flexDirection="row" width="100%" height="100%">
        <ProcessList />
        <Page />
      </box>
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
createRoot(renderer).render(<App />);
