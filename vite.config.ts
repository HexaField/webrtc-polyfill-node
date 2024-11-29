import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: resolve(__dirname, "index.js"),
      name: "webrtc-polyfill",
      fileName: "index",
    },
    rollupOptions: {
      external: ["node-datachannel", "node-domexception", "node:stream"],
    },
  },
});
