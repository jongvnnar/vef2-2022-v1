module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-restricted-syntax': 0,
    'import/prefer-default-export': 0,
    quotes: ['error', 'single'],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info', 'group', 'groupCollapsed', 'groupEnd'],
      },
    ],
    'import/extensions': 0,
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};
