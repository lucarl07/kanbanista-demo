import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      fonts: "/src/assets/fonts",
      images: "/src/assets/images",
      components: "/src/components", 
      layouts: "/src/layouts", 
      styles: "/src/styles", 
      hooks: "/src/hooks",
      utils: "/src/utils",
    }
  }
})
