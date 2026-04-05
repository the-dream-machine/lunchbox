import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Dock } from "./components/Dock";
import { Page } from "./components/Page";

const App = () => {
  return (
    <box flexDirection="row" width="100%" height="100%">
      <Dock />
      <Page />
    </box>
  );
};

const renderer = await createCliRenderer({
  screenMode: "alternate-screen",
});
createRoot(renderer).render(<App />);
