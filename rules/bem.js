module.exports = {
    plugins: [
        'bem-xjst',
    ],
    env: {
        'bem-xjst/bemhtml' : true,
        'bem-xjst/bemtree' : true,
    },
    globals: {
        modules : false,
    },
    rules : {
        'no-unused-expressions': 0,
    }
};
