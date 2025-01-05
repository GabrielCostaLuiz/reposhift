import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.{ts,js,tsx}', // Inclua todos os arquivos necessários
    '!src/templates/**/*', // Exclua arquivos do diretório "templates"
  ],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  noExternal: ['@saas/env'],
  loader: {
    '.md': 'text',
    '.ico': 'file',
    '.png': 'file',
    '.svg': 'file',
  },
  external: ['next/*', 'react', 'react-dom', 'react-icons/*'],
})
