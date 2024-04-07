module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"xo",
		"xo-react",
		"plugin:import/recommended"
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	plugins: [],
	rules: {
		'object-curly-spacing': ["error", "always"],
		'react/react-in-jsx-scope': 'off',
		'no-shadow': 2,
		'capitalized-comments': 'off',
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [
					".js",
					".jsx",
					".ts",
					".tsx"
				]
			}
		}
	}
}
