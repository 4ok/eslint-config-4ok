module.exports = {
    parserOptions: {
        ecmaVersion: 6,
    },
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
        'no-param-reassign': 0,
        'no-underscore-dangle': [2, {
            allowAfterThis: true,
        }],
        'padded-blocks': 0,
        'prefer-template': 0,
        'no-plusplus': [2, {
            allowForLoopAfterthoughts: true,
        }],
        'template-curly-spacing': ['error', 'always'],
    },
};
