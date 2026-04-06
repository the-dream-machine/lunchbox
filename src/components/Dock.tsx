import { useState } from "react";
import { useKeyboard } from "@opentui/react";
import { LaunchMachineContext } from "./LaunchMachineProvider";

export const Dock = () => {
  const actorRef = LaunchMachineContext.useActorRef();
  const config = LaunchMachineContext.useSelector(
    (state) => state.context.config,
  );
  const activeProc = LaunchMachineContext.useSelector(
    (state) => state.context.activeProc,
  );

  const procs = Object.keys(config?.procs ?? {});
  const [focusedIndex, setFocusedIndex] = useState(0);

  useKeyboard((key) => {
    if (procs.length === 0) return;

    if (key.name === "up") {
      setFocusedIndex((i) => {
        const next = Math.max(0, i - 1);
        const name = procs[next];
        if (name) actorRef.send({ type: "proc.select", name });
        return next;
      });
    } else if (key.name === "down") {
      setFocusedIndex((i) => {
        const next = Math.min(procs.length - 1, i + 1);
        const name = procs[next];
        if (name) actorRef.send({ type: "proc.select", name });
        return next;
      });
    } else if (key.name === "return") {
      setFocusedIndex((i) => {
        const name = procs[i];
        if (name) actorRef.send({ type: "proc.click", name });
        return i;
      });
    }
  });

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
        {procs.map((name, index) => {
          const isActive = name === activeProc;
          const isFocused = index === focusedIndex;

          return (
            <text
              key={name}
              bg={isActive ? "#444444" : isFocused ? "#222222" : undefined}
              fg={isActive ? "#ffffff" : isFocused ? "#cccccc" : "#888888"}
            >
              {isActive ? "▶ " : "  "}{name}
            </text>
          );
        })}
      </box>
    </box>
  );
};
