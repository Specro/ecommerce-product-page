import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce-product-page/',
  plugins: [react()],
  build: {
    assetsDir: ''
  }
})
