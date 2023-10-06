// eslint-disable-next-line no-undef
module.exports = {
  env: {
      browser: true,
      node:true,
      es2021: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended','plugin:@next/next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint','react-hooks'],
  rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      quotes: [2, 'single'],
  },
}
