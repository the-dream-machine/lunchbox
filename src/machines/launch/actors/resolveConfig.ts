import { fromPromise } from "xstate"

import { config } from "~/src/library/config"

export const resolveConfig = fromPromise(async () => config.resolve())
