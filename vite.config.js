import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Define external modules
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["module-name"], // Replace 'module-name' with the actual module causing the issue
    },
  },
});
