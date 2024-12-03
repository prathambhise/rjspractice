import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "/src/index/index.html"),
        //about: resolve(__dirname, "add-emp.html"),
       //contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});