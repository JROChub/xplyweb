import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Removed GitHub Pages base path for flexible/self-contained usage
  optimizeDeps: {
    exclude: ['xplyweb-core'] // WASM module
  },
  server: {
    fs: {
      allow: ['..'] // Allow importing from outside src if needed
    }
  }
})