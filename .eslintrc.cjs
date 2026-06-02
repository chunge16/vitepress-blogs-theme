module.exports = {
    "root": true,
    parser: "vue-eslint-parser",
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    /**
     *  https://eslint.nodejs.cn/docs/latest/use/configure/ignore
     *  fix: ESLint 默认忽略 . 开头的目录（这些路径在 Linux 系统上表示隐藏目录，ignorePatterns 加上 !/docs/.vitepress/ ! 开头表示不排除
     * **/
    "ignorePatterns": [
        ".husky",
        ".github",
        "docs/.vitepress/dist",
        "docs/.vitepress/cache",
        "!/docs/.vitepress"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        },
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        semi: ["error", "always"],
        "vue/multi-word-component-names": "off", // 关闭组件名必须多字： https://eslint.vuejs.org/rules/multi-word-component-names.html
        "vue/no-v-model-argument": "off",
        "vue/script-setup-uses-vars": "error",
        "vue/no-reserved-component-names": "off",
        "vue/custom-event-name-casing": "off",
        "vue/attributes-order": "off",
        "vue/one-component-per-file": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/max-attributes-per-line": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/attribute-hyphenation": "off",
        "vue/require-default-prop": "off",
        "vue/require-explicit-emits": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "always",
                    normal: "never",
                    component: "always",
                },
                svg: "always",
                math: "always",
            },
        ],
    }
};
