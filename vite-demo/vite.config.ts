import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import java, { createRollupInputConfig } from 'vite-plugin-java'

export default defineConfig({
  build: {
    outDir: '../src/main/webapp/WEB-INF/dist',
    emptyOutDir: true,
  },
  plugins: [/** for resolving tsconfig alias */tsconfigPaths(), java({
    javaProjectBase: '../',
    input: createRollupInputConfig('src/**/main.ts', 'src'),
  })],
})
