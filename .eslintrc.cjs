module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"xo",
		"xo-react"
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: [],
	rules: {
		'object-curly-spacing': ["error", "always"],
		'react/react-in-jsx-scope': 'off',
		'no-shadow': 2,
	},
	settings: {},
}
