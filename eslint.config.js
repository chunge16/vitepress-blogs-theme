import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';

const baseRules = {
  semi: ['error', 'always'],
};

const vueRules = {
  'vue/multi-word-component-names': 'off',
  'vue/no-v-model-argument': 'off',
  'vue/no-reserved-component-names': 'off',
  'vue/custom-event-name-casing': 'off',
  'vue/attributes-order': 'off',
  'vue/one-component-per-file': 'off',
  'vue/html-closing-bracket-newline': 'off',
  'vue/max-attributes-per-line': 'off',
  'vue/multiline-html-element-content-newline': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/attribute-hyphenation': 'off',
  'vue/require-default-prop': 'off',
  'vue/require-explicit-emits': 'off',
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
};

export default [
  {
    ignores: [
      '.husky/**',
      '.github/**',
      'docs/.vitepress/dist/**',
      'docs/.vitepress/cache/**',
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: baseRules,
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: baseRules,
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...baseRules,
      ...vueRules,
    },
  },
];
