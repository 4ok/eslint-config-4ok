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
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'configs/webpack/client.js', // todo
            }
        }
    }
};
