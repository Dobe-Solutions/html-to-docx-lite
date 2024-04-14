import { resolve } from 'path';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'html-to-docx-lite',
      fileName: 'html-to-docx-lite',
    },
    rollupOptions: {
      external: ['color-name', 'jszip', 'xmlbuilder2', 'htmlparser2'],
    },
  },
  input: 'index.js',
  plugins: [nodePolyfills()],
});
