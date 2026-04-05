import { fromPromise } from "xstate";
import { config } from "~src/library/config";
import type { LaunchMachineContext } from "../types";
import invariant from "tiny-invariant";

export const readConfig = fromPromise(
  async ({ input }: { input: LaunchMachineContext }) => {
    const { configPath } = input;
    invariant(configPath, "configPath is not defined");

    const file = Bun.file(configPath);
    const toml = await file.text();

    return config.parse(toml);
  },
);
