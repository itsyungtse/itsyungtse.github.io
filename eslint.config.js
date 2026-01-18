import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// Equivalent to Biome's recommended rules
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'prefer-const': 'error',
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
	{
		// Overrides for Astro files (matching previous Biome config)
		files: ['**/*.astro'],
		rules: {
			'prefer-const': 'off',
			'@typescript-eslint/consistent-type-imports': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		ignores: ['dist/', 'node_modules/', '.astro/'],
	},
];
