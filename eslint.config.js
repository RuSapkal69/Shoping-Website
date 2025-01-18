
export const root = true;
export const env = { browser: true, es2020: true };
export const eslintExtends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  'plugin:react-hooks/recommended',
];
export const ignorePatterns = ['dist', '.eslintrc.cjs'];
export const parserOptions = { ecmaVersion: 'latest', sourceType: 'module' };
export const settings = { react: { version: '18.2' } };
export const plugins = ['react-refresh'];
export const rules = {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
  "react/prop-types": 0
};