
import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run src/app/app.ts",
      desc: "run my app.ts file",
      allow: ["net", "read", "env"],
      unstable: false,
      env: env(),
    },
  },
};

export default config;