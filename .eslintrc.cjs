module.exports = {
    env: { browser: true, es2020: true },
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'prettier/prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'react',
        'prettier',
    ],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: { alwaysTryTypes: true },
            project: './tsconfig.json',
        },
        react: {
            version: 'detect',
        },
    },
    rules: {
        'react-refresh/only-export-components': 'warn',
        'prettier/prettier': [
            'warn',
            { endOfLine: 'auto', singleQuote: true, jsxSingleQuote: true },
        ],
        'no-duplicate-imports': ['warn', { includeExports: true }],
        'no-template-curly-in-string': 'warn',
        camelcase: ['warn', { properties: 'always' }],
        'default-case': 'warn',
        'no-lone-blocks': 'warn',
        'prefer-const': 'warn',
        yoda: 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'function',
                format: ['PascalCase', 'camelCase'],
            },
        ], // avoid react component naming warning
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/no-useless-empty-export': 'warn',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['warn'], // overwrite base no-redeclare eslint
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['warn', { hoist: 'all' }], // overwrite base no-shadow eslint
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['warn'], // overwrite base no-unused-expressions eslint
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'warn', // overwrite base no-use-before-define eslint
        'react/boolean-prop-naming': ['warn', { validateNested: true }],
        'react/button-has-type': 'warn',
        'react/no-array-index-key': 'warn',
        'react/no-unstable-nested-components': 'error',
        'react/no-unused-prop-types': 'warn',
        'react/no-unused-state': 'warn',
        'react/self-closing-comp': 'warn',
        'react/jsx-no-constructed-context-values': 'warn',
        'react/jsx-no-leaked-render': [
            'warn',
            { validStrategies: ['ternary', 'coerce'] },
        ],
        'import/no-unresolved': 'error',
        'import/no-cycle': 'error',
        'import/first': 'error',
        'import/group-exports': 'error',
        'import/newline-after-import': 'error',
        'import/order': 'error',
    },
};
