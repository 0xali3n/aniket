import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/faucet': {
        target: 'https://faucet.circle.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/faucet/, ''),
        secure: true,
      },
    },
  },
})
