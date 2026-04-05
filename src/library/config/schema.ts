import { z } from "zod/v4";

const procSchema = z.object({
  shell: z.string(),
  autostart: z.boolean(),
});

export const schema = z.object({
  procs: z.record(z.string(), procSchema),
});

export type Config = z.infer<typeof schema>;
