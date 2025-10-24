import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/mi-proyecto/", // 👈 usa el nombre EXACTO de tu repositorio de GitHub
})
