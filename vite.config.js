import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/srisubhamstore/", // Make sure this matches your GitHub repository name
  build: {
    rollupOptions: {
      external: [
        "slick-carousel/slick/slick.css",
        "slick-carousel/slick/slick-theme.css",
      ],
    },
  },
});
