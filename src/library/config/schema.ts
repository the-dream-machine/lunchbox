import { z } from "zod/v4";

const procSchema = z.object({
  shell: z.string().describe("The shell command to run the process"),
  autostart: z.boolean().describe("Whether to start the process automatically on launch"),
});

export const schema = z.object({
  procs: z.record(z.string(), procSchema).describe("Map of managed processes"),
});

export type Config = z.infer<typeof schema>;
