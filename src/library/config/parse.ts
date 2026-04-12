import { TOML } from "bun"

import { schema } from "./schema"

export const parse = (toml: string) => {
  const data = TOML.parse(toml)

  return schema.parse(data)
}
