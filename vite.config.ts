import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/terminalportfolio/",  // <- repo name
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }, // optional, helps with "@/..."
  },
});
