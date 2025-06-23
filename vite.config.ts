import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: "/data",
      src: "/src",
      assets: "/src/assets",
      components: "/src/components", 
      layouts: "/src/layouts", 
      styles: "/src/styles", 
      hooks: "/src/hooks",
      utils: "/src/utils",
    }
  }
})
