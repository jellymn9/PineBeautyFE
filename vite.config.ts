import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
//import styledComponents from "vite-plugin-styled-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true, // Useful for debugging
              minify: true, // Optimize output styles
              pure: true, // Enable tree-shaking
              ssr: false,
            },
          ],
        ],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
