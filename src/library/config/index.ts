import { parse } from "./parse";
import { schema } from "./schema";

class LunchboxConfig {
	parse = parse;
	schema = schema;
}

export const config = new LunchboxConfig();
