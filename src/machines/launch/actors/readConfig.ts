import invariant from "tiny-invariant"
import { fromPromise } from "xstate"

import { config } from "~/src/library/config"

import type { LaunchMachineContext } from "../types"

export const readConfig = fromPromise(async ({ input }: { input: LaunchMachineContext }) => {
  const { configPath } = input
  invariant(configPath, "configPath is not defined")

  const file = Bun.file(configPath)
  const toml = await file.text()

  return config.parse(toml)
})
