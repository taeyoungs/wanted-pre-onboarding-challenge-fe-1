module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'eslint:recommended', 'plugin:react-hooks/recommended'],
  plugins: ['@emotion'],
  root: true,
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ['**/*.md'],
};
