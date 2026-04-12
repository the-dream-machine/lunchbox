import { z } from "zod/v4"

import { schema } from "../src/library/config/schema"

const jsonSchema = z.toJSONSchema(schema, { target: "draft-07" })
const output = JSON.stringify(jsonSchema, null, 2)

await Bun.write("lunchbox.schema.json", output)
