import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { hostname } from 'os'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    server: 6000,
    allowedHosts: [
       '.ngrok-free.app'
    ]
  }
})
