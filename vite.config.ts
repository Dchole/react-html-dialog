import { resolve } from "path";
import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ["lib"] })],

  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        index: resolve(__dirname, "lib/index.tsx"),
        hooks: resolve(__dirname, "lib/hooks/index.ts")
      },
      name: "react-html-dialog"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
