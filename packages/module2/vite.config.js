import { defineConfig } from "vite";
const path = require('path');
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build:
    {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'my-lib',
            formats: ['es', 'umd'], // adding 'umd' requires globals set to every external module
            fileName: (format) => `my-lib.es.js`,
        },
        outDir: 'dist', // to retain the types folder generated by tsc
    }
});
