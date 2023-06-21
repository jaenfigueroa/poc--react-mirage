import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
