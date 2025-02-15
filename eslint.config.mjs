import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    pluginJs.configs.recommended,

    pluginReact.configs.flat['jsx-runtime'],

    ...tseslint.configs.recommended,

    stylistic.configs['recommended-flat'],
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
    }),
    {
        plugins: {
            '@stylistic': stylistic,
            'unused-imports': eslintPluginUnusedImports,
            'simple-import-sort': eslintPluginSimpleImportSort,
        },
    },
    {
        rules: {
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@stylistic/max-statements-per-line': 'off',
            '@stylistic/arrow-parens': [
                'error',
                'always',
            ],
            '@stylistic/quotes': [
                'error',
                'single',
            ],
            '@stylistic/jsx-quotes': [
                'error',
                'prefer-single',
            ],
            '@stylistic/jsx-sort-props': [
                'error',
                {
                    multiline: 'last',
                    shorthandLast: true,
                    ignoreCase: true,
                },
            ],
            '@stylistic/jsx-first-prop-new-line': [
                'error',
                'multiprop',
            ],
            '@stylistic/jsx-max-props-per-line': [
                'error',
                {
                    maximum: 1,
                    when: 'always',
                },
            ],
            '@stylistic/multiline-ternary': [
                'error',
                'always',
            ],
            '@stylistic/jsx-tag-spacing': [
                'error',
                {
                    closingSlash: 'never',
                    beforeSelfClosing: 'always',
                    afterOpening: 'never',
                    beforeClosing: 'allow',
                },
            ],
            '@stylistic/rest-spread-spacing': [
                'error',
                'never',
            ],
            '@stylistic/max-len': [
                'error',
                {
                    code: 120,
                    comments: 120,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreComments: true,
                    ignoreRegExpLiterals: true,
                    ignoreTemplateLiterals: true,
                },
            ],
            '@stylistic/comma-dangle': [
                'error',
                'always-multiline',
            ],
            '@stylistic/padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
                {
                    blankLine: 'always',
                    prev: [
                        'multiline-const',
                        'multiline-let',
                    ],
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: 'import',
                    next: 'export',
                },
                {
                    blankLine: 'always',
                    prev: 'import',
                    next: [
                        'multiline-const',
                        'multiline-let',
                        'const',
                        'let',
                    ],
                },
            ],
            '@stylistic/object-property-newline': [
                'error',
                { allowAllPropertiesOnSameLine: false },
            ],
            '@stylistic/object-curly-spacing': [
                'error',
                'always',
            ],
            '@stylistic/object-curly-newline': [
                'error',
                {
                    ObjectExpression: {
                        minProperties: 2,
                        multiline: true,
                    },
                    ObjectPattern: {
                        minProperties: 2,
                        multiline: true,
                    },
                    ImportDeclaration: { minProperties: 2 },
                    ExportDeclaration: { minProperties: 2 },
                },
            ],
            '@stylistic/brace-style': [
                'error',
                '1tbs',
                { allowSingleLine: true },
            ],
            '@stylistic/array-bracket-newline': [
                'error',
                {
                    multiline: true,
                    minItems: 3,
                },
            ],
            '@stylistic/array-element-newline': [
                'error',
                {
                    ArrayExpression: { minItems: 2 },
                    ArrayPattern: { minItems: 3 },
                },
            ],
            'complexity': [
                'warn',
                5,
            ],

            // plugins
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        [
                            '^react?\\w',
                            '^@?\\w',
                        ],
                        [
                            '/common/hooks',
                            '/common/utils',
                            '/common/components',
                            '/common',
                            '^\\../../..*',
                            '^\\../../*',
                            '^\\../*',
                            '^\\./',
                            '/redux',
                            '/utils',
                            '/type',
                            '/types',
                            'scss',
                            '^\\u0000',
                        ],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        ignores: [
            '/node-modules',
            '.env',
            'autotests',
            'babel.config.js',
            'metro.config.js',
            'react-native.config.js',
        ],
    },
];
