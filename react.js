module.exports = {
    extends: [
        'eslint-config-airbnb/base',
        './rules/base',
        './rules/react',
    ].map(require.resolve),
};
