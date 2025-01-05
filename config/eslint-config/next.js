/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocketseat/eslint-config/next'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'off',
  },
}
