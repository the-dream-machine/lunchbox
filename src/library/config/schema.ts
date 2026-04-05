import { z } from "zod";

const procSchema = z.object({
	shell: z.string(),
	autostart: z.boolean(),
});

const configSchema = z.object({
	procs: z.record(z.string(), procSchema),
});

export type Config = z.infer<typeof configSchema>;

export const schema = () => configSchema;
