import { z } from "zod/v4";

export const processSchema = z.object({
  shell: z.string().describe("The shell command to run the process."),
  autostart: z
    .boolean()
    .describe("Whether to start the process automatically on launch."),
});

export const schema = z.object({
  processes: z.record(z.string(), processSchema).describe("Map of managed processes."),
});

export type Config = z.infer<typeof schema>;
