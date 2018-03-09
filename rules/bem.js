module.exports = {
	plugins: [
		'bem-xjst',
	],
	env: {
		'bem-xjst/bemhtml': true,
		'bem-xjst/bemtree': true,
	},
	globals: {
		modules: false,
		borschik: true,
	},
	rules: {
		'no-unused-expressions': 0,
		'prefer-rest-params': 0,
		'function-paren-newline': 0,
	},
}
