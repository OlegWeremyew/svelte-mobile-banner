import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocessor from 'svelte-preprocess'
import jsonCombine from './src/modules/rollup-plugin-json-combine'
import path from 'path';
import zipPack from "vite-plugin-zip-pack";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    svelte({
      configFile: 'svelte.config.js',
      preprocess: [sveltePreprocessor({
        typescript: true
      })],
      extensions: ['.svelte']
    }),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'script',
    rollupOptions: {
      plugins: [
        // json(),
        jsonCombine({
          input: ['src/i18n/*.json'],
          fileName: 'src/store/i18n.json',
          merge: (items) => {
            const i18n = {};
            items.forEach((item) => {
              i18n[item.name] = item.res;
            });
            return i18n;
          },
        }),
        // zipPack({
        //   outDir: 'dist',
        //   outFileName: '219.zip'
        // })
      ],
      output: {
        assetFileNames: 'resources/[ext]/[name][extname]',
      },
    },
  },
  //publicDir: "content",
  // server: {
  //   open: './index.html',
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
