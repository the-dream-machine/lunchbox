import { TextAttributes } from "@opentui/core";
import { LaunchMachineContext } from "./LaunchMachineProvider";

export const Page = () => {
  const activeProcess = LaunchMachineContext.useSelector(
    (state) => state.context.activeProcess,
  );

  if (!activeProcess) {
    return (
      <box width="100%" height="100%">
        <ascii-font font="tiny" text="OpenTUI" />
        <text attributes={TextAttributes.DIM}>What will you build?</text>
      </box>
    );
  }

  return (
    <box width="100%" height="100%" paddingX={1} paddingY={1}>
      <text attributes={TextAttributes.BOLD}>{activeProcess}</text>
    </box>
  );
};
