module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'linebreak-style': 'off',
				'import/prefer-default-export': 'off',
				'no-tabs': ['error', { allowIndentationTabs: true }],
				indent: ['error', 'tab'],
			},
		},
		{
			files: ['*.jsx', '*.tsx'],
			rules: {
				'react/jsx-indent': ['error', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],
				'react/jsx-indent-props': ['error', 'tab'],
				'react/prop-types': 'off',
				'linebreak-style': 'off',
				'import/prefer-default-export': 'off',
				'no-tabs': ['error', { allowIndentationTabs: true }],
				indent: ['error', 'tab'],
			},
		},
	],
};
