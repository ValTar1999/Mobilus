import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/your-subfolder/', // если деплой в example.com/your-subfolder/
  plugins: [react()],
})
