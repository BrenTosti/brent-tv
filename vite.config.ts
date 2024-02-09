import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import unfonts from "unplugin-fonts/vite";


export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    plugins: [
        vue(),
        unfonts({
            fontsource: {
                families: [
                    {
                        name: "Merriweather",
                        weights: [300, 400, 700, 900]
                    },
                    {
                        name: "Quicksand",
                        weights: [300, 400, 500, 600, 700]
                    }
                ]
            }
        })
    ]
});
