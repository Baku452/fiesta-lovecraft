import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  return {
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": JSON.stringify(mode === "production" ? "production" : "development"),
      "process.env": "{}",
      "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(env.VITE_SUPABASE_URL || ""),
      "import.meta.env.VITE_SUPABASE_ANON_KEY": JSON.stringify(env.VITE_SUPABASE_ANON_KEY || ""),
      "import.meta.env.VITE_SUPABASE_KEY": JSON.stringify(env.VITE_SUPABASE_KEY || ""),
    },
    build: {
      emptyOutDir: false,
      lib: {
        entry: "src/gameMain.tsx",
        formats: ["es"],
        fileName: () => "game-app.js",
      },
      outDir: "public",
      rollupOptions: {
        output: {
          assetFileNames: "game-style[extname]",
        },
      },
    },
  };
});
