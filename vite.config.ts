import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/<REPO>/", // <-- add this line (use "/" only for user/organization pages)
})
