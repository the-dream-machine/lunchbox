import { LaunchMachineContext } from "./LaunchMachineProvider";

export const Dock = () => {
  const config = LaunchMachineContext.useSelector(
    (state) => state.context.config,
  );
  console.log("🚀 config ~ :", config);

  // const procs = Object.keys(config?.procs ?? {});

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
      <text>🍱 Dock</text>
      <box flexDirection="column" marginTop={1}>
        {/*{procs.map((name) => (
          <text key={name}>{name}</text>
        ))}*/}
      </box>
    </box>
  );
};
