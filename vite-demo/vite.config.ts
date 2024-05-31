import path from 'node:path'
import { defineConfig } from 'vite'
import { globSync } from 'glob'
import { fileURLToPath } from 'url'

export default defineConfig(({ mode }) => ({
  server: {
    origin: mode === 'production' ? '' : `http://localhost:5173`,
  },
  base: mode === 'production' ? '/spring_mvc/resources/' : '/',
  build: {
    manifest: true,
    outDir: '../src/main/webapp/WEB-INF/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
          globSync('src/**/main.ts').map((file) => [
            path.relative('src', file).replace(/\.ts$/, ''),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
  },
}))
