import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // eslint-disable-next-line no-useless-escape
      "^.*\\/api$": {
        target: "https://www.prisjakt.nu/_internal/bff",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
