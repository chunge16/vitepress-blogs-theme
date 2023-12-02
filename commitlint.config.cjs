// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
    // 继承的规则
    extends: ["@commitlint/config-conventional"],
    // 自定义规则
    rules: {
        // @see https://commitlint.js.org/#/reference-rules

        // 提交类型枚举，git提交type必须是以下类型
        "type-enum": [
            2,
            "always",
            [
                "init", // 初次提交
                "feat", // 新增功能
                "fix", // 修复缺陷
                "docs", // 文档变更
                "style", // 代码格式（不影响功能，例如空格、分号等格式修正）
                "refactor", // 代码重构（不包括 bug 修复、功能新增）
                "perf", // 性能优化
                "test", // 添加疏漏测试或已有测试改动
                "build", // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
                "ci", // 修改 CI 配置、脚本
                "revert", // 回滚 commit
                "chore", // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
            ],
        ],
        "subject-case": [0], // subject大小写不做校验
    },
    prompt: {
        alias: { fd: "docs: fix typos" },
        messages: {
            type: "Select the type of change that you're committing:",
            scope: "Denote the SCOPE of this change (optional):",
            customScope: "Denote the SCOPE of this change:",
            subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect: "Select the ISSUES type of changeList by this change (optional):",
            customFooterPrefix: "Input ISSUES prefix:",
            footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
            generatingByAI: 'Generating your AI commit subject...',
            generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit: "Are you sure you want to proceed with the commit above?"
        },
        types: [
            { value: "feat", name: "feat:     ✨  A new feature", emoji: ":sparkles:" },
            { value: "fix", name: "fix:      🐛  A bug fix", emoji: ":bug:" },
            { value: "docs", name: "docs:     📝  Documentation only changes", emoji: ":memo:" },
            { value: "style", name: "style:    💄  Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
            { value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
            { value: "perf", name: "perf:     ⚡️  A code change that improves performance", emoji: ":zap:" },
            { value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
            { value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies", emoji: ":package:" },
            { value: "ci", name: "ci:       🎡  Changes to our CI configuration files and scripts", emoji: ":ferris_wheel:" },
            { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ":hammer:" },
            { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: ":rewind:" }
        ],
        useEmoji: true,
        emojiAlign: "center",
        useAI: false,
        aiNumber: 1,
        themeColorCode: "",
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: "bottom",
        customScopesAlias: "custom",
        emptyScopesAlias: "empty",
        upperCaseSubject: false,
        markBreakingChangeMode: false,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: "|",
        skipQuestions: [],
        issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
        customIssuePrefixAlign: "top",
        emptyIssuePrefixAlias: "skip",
        customIssuePrefixAlias: "custom",
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: "",
        defaultIssues: "",
        defaultScope: "",
        defaultSubject: ""
    }
};
