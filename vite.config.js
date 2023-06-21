import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //PARA IGNORAR CARPETAS AL BUILDEAR
  //QUEREOS IGNORAR TODO LO QUE ESTA DENTRO DE LA CARPETA MIRAGE
  rollupOptions: {
    input: {
      exclude: 'mirage/**',
    },
  },
})
