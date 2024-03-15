import * as path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

const PROJECT_ROOT = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: true,
  },
  base: "./",
  publicDir: path.join(PROJECT_ROOT, "public"),
  build: {
    outDir: path.join(PROJECT_ROOT, "build"),
    emptyOutDir: true,
  },
  esbuild: {
    legalComments: "none",
  },
  appType: "spa",
  root: "src",
  clearScreen: false,
  plugins: [tsconfigPaths(), react()],
});
