import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        at3: resolve(__dirname, 'index2.html'),
        at4: resolve(__dirname, 'index3.html'),
      },
    },
  },
})