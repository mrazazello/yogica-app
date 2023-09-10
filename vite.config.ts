import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@app": "/src/app",
      "@pages": "/src/pages",
      "@shared": "/src/shared",
      "@features": "/src/features",
      "@entities": "/src/entities",
    },
  },
});
