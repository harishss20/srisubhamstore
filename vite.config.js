import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Define the Vite configuration
export default defineConfig({
  plugins: [react()],
  base: "/srisubhamstore/", // Make sure this matches your GitHub repository name
  build: {
    outDir: "dist", // The output directory for the production build
  },
});
