import { parse } from "./parse";
import { resolve } from "./resolve";
import { schema } from "./schema";

class Config {
  parse = parse;
  resolve = resolve;
  schema = schema;
}

export const config = new Config();
