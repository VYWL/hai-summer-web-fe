import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, ".") },
            { find: "@config", replacement: path.resolve(__dirname, "config") },
            { find: "@pages", replacement: path.resolve(__dirname, "pages") },
            { find: "@hook", replacement: path.resolve(__dirname, "hook") },
            { find: "@components", replacement: path.resolve(__dirname, "components") },
        ],
    },
});
