module.exports = {
    extends : 'airbnb/base',
    parserOptions : {
        ecmaVersion : 6
    },
    rules : {
        indent : [2, 4, {SwitchCase : 1}],
        'newline-before-return' : 2,
        'no-param-reassign' : 0,
        'space-before-blocks' : 2,
        'key-spacing' : [2, {beforeColon : true, afterColon : true}],
        'newline-after-var' : 2,
        'padded-blocks' : 0,
        'prefer-template' : 0
    }
};
