import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    outDir: 'fashionguide' // folder name instead of 'dist'
  },
  //base: '/portfolio/projects/fashionguide/' // public path on your server
})
