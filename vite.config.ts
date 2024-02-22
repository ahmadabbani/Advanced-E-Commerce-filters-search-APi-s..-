import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./Advanced-E-Commerce-filters-search-APi-s..-/",
  build: {
    outDir: 'dist', // set the output directory to 'dist'
    // other build configurations...
  },
})
