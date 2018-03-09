module.exports = {
	extends: [
		'eslint-config-airbnb/base',
		require.resolve('./rules/base'),
		require.resolve('./rules/react'),
	],
}
