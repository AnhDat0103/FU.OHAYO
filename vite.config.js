import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  define: {
    global: {}, // 👈 fix lỗi `global is not defined`
  },
 server: {
  proxy: {
    "/api": {
      target: "http://localhost:8080",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
    "/ws": {
      target: "http://localhost:8080",
      changeOrigin: true,
      ws: true, // ✅ Cần thêm dòng này để bật WebSocket proxy
    },
  },
},
});
