module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'standard',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': ['off'],
	},
	root: true,
	globals: {
		JSX: 'readonly',
	},
};
