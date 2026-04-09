import { join, dirname } from "node:path";
import { Glob } from "bun";

const DEFAULT_FILENAME = "lunchbox.toml";

const walkUp = async (from: string): Promise<string | null> => {
  const glob = new Glob("*.lunchbox.toml");

  let dir = from;

  while (true) {
    for await (const match of glob.scan({ cwd: dir })) {
      return join(dir, match);
    }

    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }

  return null;
};

export const resolve = async (customPath?: string): Promise<string> => {
  if (customPath) {
    const file = Bun.file(customPath);
    if (await file.exists()) return customPath;
    throw new Error(`Config file not found: ${customPath}`);
  }

  const cwd = process.cwd();

  const defaultPath = join(cwd, DEFAULT_FILENAME);
  if (await Bun.file(defaultPath).exists()) return defaultPath;

  const found = await walkUp(cwd);
  if (found) return found;

  throw new Error("No lunchbox config file found");
};
