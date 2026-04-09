import { useKeyboard } from "@opentui/react";
import type { KeyEvent } from "@opentui/core";
import { useCallback, useEffect, useRef } from "react";
import { ProcessListMachineContext } from "./ProcessListMachineProvider";
import { ProcessListItem } from "./ProcessListItem";
import type { ActorRefFrom } from "xstate";
import type { launchMachine } from "../../machines/launch/machine";

interface Props {
  activeProcess?: string;
  launchRef?: ActorRefFrom<typeof launchMachine>;
}

export const ProcessListContent = ({
  activeProcess,
  launchRef,
}: Props) => {
  const processListActorRef = ProcessListMachineContext.useActorRef();
  const focusedIndex = ProcessListMachineContext.useSelector(
    (state) => state.context.focusedIndex
  );
  const processes = ProcessListMachineContext.useSelector(
    (state) => state.context.processes
  );
  const selectedProcess = ProcessListMachineContext.useSelector(
    (state) => state.context.selectedProcess
  );

  const prevSelectedRef = useRef<string | undefined>(undefined);
  const isConfirmRef = useRef(false);

  // Bridge: When selection changes in processListMachine, notify launchMachine
  useEffect(() => {
    if (selectedProcess && selectedProcess !== prevSelectedRef.current) {
      if (isConfirmRef.current) {
        // Confirm selection (Enter key)
        launchRef?.send({ type: "process.click", name: selectedProcess });
        isConfirmRef.current = false;
      } else if (activeProcess !== selectedProcess) {
        // Highlight selection (Space key or navigation)
        launchRef?.send({ type: "process.select", name: selectedProcess });
      }

      prevSelectedRef.current = selectedProcess;
    }
  }, [selectedProcess, activeProcess, launchRef]);

  const handleKeypress = useCallback(
    (key: KeyEvent) => {
      // Track if this is a confirm action
      if (key.name === "return" || key.name === "enter") {
        isConfirmRef.current = true;
      }

      processListActorRef.send({ type: "keypress", key });
    },
    [processListActorRef]
  );

  useKeyboard(handleKeypress);

  return (
    <box
      paddingX={1}
      paddingY={1}
      minWidth={24}
      maxWidth={32}
      height="100%"
      flexShrink={0}
      border={["right"]}
      borderStyle="single"
      borderColor="#333333"
    >
      <text>🍱 Lunchbox</text>
      <box flexDirection="column" marginTop={1}>
        {processes.map((name, index) => (
          <ProcessListItem
            key={name}
            name={name}
            isActive={name === activeProcess}
            isFocused={index === focusedIndex}
          />
        ))}
      </box>
    </box>
  );
};
