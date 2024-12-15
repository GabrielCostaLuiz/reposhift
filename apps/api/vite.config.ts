import { defineConfig } from 'vitest/config'
import tsConfigPaths from 'vite-plugin-tsconfig-paths'

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    globals: true,
  },
})
