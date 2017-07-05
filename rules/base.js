module.exports = {
    parserOptions: {
        ecmaVersion: 6,
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'newline-before-return': 2,
        'no-param-reassign': 0,
        'newline-after-var': 2,
        'padded-blocks': 0,
        'prefer-template': 0,
        'no-underscore-dangle': [2, {
            allowAfterThis: true
        }],
    }
};
