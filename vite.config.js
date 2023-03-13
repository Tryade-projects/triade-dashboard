import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // affiche le chemin complet des modules scss dans le navigateur
  css: {
    devSourcemap: true,
  },
});
