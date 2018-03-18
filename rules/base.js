module.exports = {
	plugins: [
		'json',
	],
	parserOptions: { ecmaVersion: 6 },
	rules: {
		'comma-dangle': [ 2, {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],
		'no-tabs': 0,
		indent: [ 2, 'tab', { SwitchCase: 1 }],
		'newline-after-var': 2,
		'newline-before-return': 2,
		'no-param-reassign': 0,
		'no-underscore-dangle': [ 2, { allowAfterThis: true }],
		'padded-blocks': 0,
		'no-plusplus': [ 2, { allowForLoopAfterthoughts: true }],
		'template-curly-spacing': [ 2, 'always' ],
		'array-bracket-spacing': [ 2, 'always', {
			objectsInArrays: false,
			arraysInArrays: false,
		}],
		'newline-per-chained-call': [ 2, { ignoreChainWithDepth: 2 }],
		semi: [ 2, 'never' ],
		'object-curly-newline': [ 2, {
			ObjectExpression: {
				multiline: true,
				minProperties: 2,
			},
			ObjectPattern: {
				multiline: true,
				minProperties: 4,
			},
		}],
		'object-property-newline': [ 2, { allowAllPropertiesOnSameLine: false }],
	},
}
