import { fromPromise } from "xstate";
import { config } from "~src/library/config";
import type { Config } from "~src/library/config/schema";

export const readConfig = fromPromise<Config>(async () => {
  const file = Bun.file("lunchbox.toml");
  const toml = await file.text();

  return config.parse(toml);
});
