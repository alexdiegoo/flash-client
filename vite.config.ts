import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import electron from 'vite-plugin-electron/simple'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    electron({
      main: {
        entry: 'src/main/index.ts',
      },
      preload: {
        input: path.join(__dirname, 'src/main/preload.ts'),
      },
      renderer: {},
    }),
  ],
})
