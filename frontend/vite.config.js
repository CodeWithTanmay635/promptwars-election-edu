import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    proxy: mode === 'development' ? {
      '/api': 'http://localhost:3000'
    } : undefined
  }
}))
