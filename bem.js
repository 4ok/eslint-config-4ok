module.exports = {
    extends: [
        'eslint-config-airbnb/base',
        './rules/base',
        './rules/bem',
    ].map(require.resolve),
    env: {
        browser: true,
    },
};
