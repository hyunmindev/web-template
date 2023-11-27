module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'npm run check',
  '*.{json}': ['prettier --write'],
};
