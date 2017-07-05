module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        'react',
        'import',
    ],
    extends: [
        'plugin:react/recommended'
    ],
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'configs/webpack/client.js', // todo
            }
        }
    }
};
