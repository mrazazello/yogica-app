import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { PluginOption, defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      template: "treemap", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html" // will be saved in project's root
    }) as PluginOption
  ],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@shared": "/src/shared",
      "@features": "/src/features",
      "@entities": "/src/entities"
    }
  }
});
