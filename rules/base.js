module.exports = {
    parserOptions: {
        ecmaVersion: 6,
    },
    plugins: [
        'no-param-reassign-allow-reduce',
    ],
    rules: {
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        indent: [2, 4, {
            SwitchCase: 1,
        }],
        'newline-after-var': 2,
        'newline-before-return': 2,
        'no-underscore-dangle': [2, {
            allowAfterThis: true,
        }],
        'padded-blocks': 0,
        'no-plusplus': [2, {
            allowForLoopAfterthoughts: true,
        }],
        'template-curly-spacing': ['error', 'always'],
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 2,
        }],
        'no-param-reassign-allow-reduce/allow-reduce': 2,
        'no-param-reassign-allow-reduce/no-reduce-identifiers': 2,
    },
};
