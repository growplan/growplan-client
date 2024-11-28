import { ConfigEnv, defineConfig, loadEnv } from "vite";

export default ({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
    build: {
      outDir: "build",
    },
    define: {
      "process.env": process.env,
    },
  });
};
