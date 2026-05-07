import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/app",  // 👈 added this
  server: {
    allowedHosts: [
      "smileless-portionless-daina.ngrok-free.dev"
    ],
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    // 👇 removed proxy block — not needed, that was for local dev only
    // in production, Vercel rewrites handle the proxying
  },

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));