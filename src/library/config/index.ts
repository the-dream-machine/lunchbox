import { parse } from "./parse";
import { schema } from "./schema";

class Config {
  parse = parse;
  schema = schema;
}

export const config = new Config();
