# Changelog


## v0.5.4

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.5.3...v0.5.4)

### 🩹 Fixes

- Ensure tailwind v4 scans theme sources ([3b287a1](https://github.com/chunge16/vitepress-blogs-theme/commit/3b287a1))

### 💅 Refactors

- Optimize theme composables and build setup ([8582304](https://github.com/chunge16/vitepress-blogs-theme/commit/8582304))

### 🤖 CI

- Align pnpm and node versions in workflows ([098d1a0](https://github.com/chunge16/vitepress-blogs-theme/commit/098d1a0))
- Use packageManager version for pnpm setup ([22cc744](https://github.com/chunge16/vitepress-blogs-theme/commit/22cc744))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))
- Jack Shi ([@chunge16](http://github.com/chunge16))

## v0.5.3

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.5.2...v0.5.3)

### 🎨 Styles

- **theme:** 为Vue组件添加样式引用并调整导入顺序 ([a91d4fe](https://github.com/chunge16/vitepress-blogs-theme/commit/a91d4fe))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.5.2

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.5.1...v0.5.2)

### 📦 Build

- 迁移到 Tailwind CSS v4 并更新配置 ([3ed3bf9](https://github.com/chunge16/vitepress-blogs-theme/commit/3ed3bf9))
- 将 postcss 配置文件添加到发布包中 ([68a0058](https://github.com/chunge16/vitepress-blogs-theme/commit/68a0058))

### 🏡 Chore

- 移除未使用的依赖并调整包管理配置 ([29452ac](https://github.com/chunge16/vitepress-blogs-theme/commit/29452ac))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.5.1

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.5.0...v0.5.1)

## v0.5.0

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.4.3...v0.5.0)

### 🩹 Fixes

- **主题:** 修复 posts.data.ts 中 formatTags 和 formatDate 的类型定义 ([0b7cc31](https://github.com/chunge16/vitepress-blogs-theme/commit/0b7cc31))

### 💅 Refactors

- 移除组件中的TypeScript语法以简化配置 ([cf6b4a7](https://github.com/chunge16/vitepress-blogs-theme/commit/cf6b4a7))

### 📖 Documentation

- **guide:** 重构入门指南以改进结构和清晰度 ([722165e](https://github.com/chunge16/vitepress-blogs-theme/commit/722165e))
- 更新图标和Tailwind配置文档以匹配Tailwind v4.1 ([421e38b](https://github.com/chunge16/vitepress-blogs-theme/commit/421e38b))

### 📦 Build

- 升级 Tailwind CSS 至 v4 并迁移图标插件 ([d17a9ab](https://github.com/chunge16/vitepress-blogs-theme/commit/d17a9ab))

### 🏡 Chore

- 将 Vue 依赖版本固定为 latest ([a439b63](https://github.com/chunge16/vitepress-blogs-theme/commit/a439b63))

### 🎨 Styles

- **template:** 修复图标类名格式并移除多余空行 ([accc98d](https://github.com/chunge16/vitepress-blogs-theme/commit/accc98d))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.4.3

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.4.2...v0.4.3)

### 📦 Build

- **deps:** 添加博客主题和Vue依赖 ([fdb91e6](https://github.com/chunge16/vitepress-blogs-theme/commit/fdb91e6))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.4.2

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.4.1...v0.4.2)

### 💅 Refactors

- **cli:** 重命名 projectRoot 为 vitePressProjectRoot 以明确作用域 ([d1a81e1](https://github.com/chunge16/vitepress-blogs-theme/commit/d1a81e1))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.4.1

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.4.0...v0.4.1)

## v0.4.0

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.3.0...v0.4.0)

### 🚀 Enhancements

- **cli:** 新增交互式初始化命令行工具 ([67d1c64](https://github.com/chunge16/vitepress-blogs-theme/commit/67d1c64))
- **cli:** 在初始化向导中添加 npm 脚本配置选项 ([6c579b6](https://github.com/chunge16/vitepress-blogs-theme/commit/6c579b6))

### 📖 Documentation

- 添加 frontmatter 中 top 和 sticky 字段的文档 ([aa8b0a9](https://github.com/chunge16/vitepress-blogs-theme/commit/aa8b0a9))

### 📦 Build

- 更新 peerDependencies 中的 vitepress 版本至 ^1.6.4 ([b2cc508](https://github.com/chunge16/vitepress-blogs-theme/commit/b2cc508))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.3.0

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.2.4...v0.3.0)

### 🩹 Fixes

- 🐛  修复英文文档下 details 显示错误的问题 ([5200cc4](https://github.com/chunge16/vitepress-blogs-theme/commit/5200cc4))

### 💅 Refactors

- ♻️  优化评论组件参数容错处理 ([fa3ed4f](https://github.com/chunge16/vitepress-blogs-theme/commit/fa3ed4f))

### 📖 Documentation

- 📝  改进文档关于快速开始的描述 ([efce753](https://github.com/chunge16/vitepress-blogs-theme/commit/efce753))
- 为文档和博客文章添加置顶和置顶顺序标记 ([133df69](https://github.com/chunge16/vitepress-blogs-theme/commit/133df69))

### 📦 Build

- 📦️  修复 encountering dead links 打包报错的问题 ([143a12e](https://github.com/chunge16/vitepress-blogs-theme/commit/143a12e))

### 🏡 Chore

- 升级 vitepress 依赖至 1.6.4 版本 ([c442f5b](https://github.com/chunge16/vitepress-blogs-theme/commit/c442f5b))

### 🤖 CI

- 更新 GitHub Pages 部署工作流中的 actions 版本 ([4699c1c](https://github.com/chunge16/vitepress-blogs-theme/commit/4699c1c))
- 更新 GitHub Actions 工作流中的 actions 版本至 v4 ([fadc8f9](https://github.com/chunge16/vitepress-blogs-theme/commit/fadc8f9))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.2.4

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.2.3...v0.2.4)

### 🩹 Fixes

- 🐛  修复vitepress 升级到 v1.1.4  css错误的问题 ([ab27a38](https://github.com/chunge16/vitepress-blogs-theme/commit/ab27a38))

### ❤️ Contributors

- Chunge ([@chunge16](http://github.com/chunge16))

## v0.2.3

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.2.2...v0.2.3)

### 🩹 Fixes

- 🐛  修复用户头像 没有添加 base路径的问题 ([f393937](https://github.com/chunge16/vitepress-blogs-theme/commit/f393937))

### 📦 Build

- 📦️  升级 vitepress 版本 ([80d8a2c](https://github.com/chunge16/vitepress-blogs-theme/commit/80d8a2c))

### ❤️ Contributors

- Chunge <1362598656@qq.com>

## v0.2.2

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.2.1...v0.2.2)

### 🩹 Fixes

- 🐛  修复打包动态加载报错的问题 ([4793b5d](https://github.com/chunge16/vitepress-blogs-theme/commit/4793b5d))

### ❤️ Contributors

- Chunge <1362598656@qq.com>

## v0.2.1

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.2.0...v0.2.1)

### 🩹 Fixes

- 🐛  fix shields dm url mistake ([56b9222](https://github.com/chunge16/vitepress-blogs-theme/commit/56b9222))
- 🐛  修复头像在配置base路径错误的问题 ([33f66be](https://github.com/chunge16/vitepress-blogs-theme/commit/33f66be))

### 📖 Documentation

- 📝  up README ([aaf978a](https://github.com/chunge16/vitepress-blogs-theme/commit/aaf978a))
- 📝  fix Giscus url ([49ba6bb](https://github.com/chunge16/vitepress-blogs-theme/commit/49ba6bb))
- 📝  add getting started File Structure content ([1331339](https://github.com/chunge16/vitepress-blogs-theme/commit/1331339))
- 📝  update config.md getting-started.md ([c5a913f](https://github.com/chunge16/vitepress-blogs-theme/commit/c5a913f))

### 📦 Build

- 📦️  up vitepress ([6492a01](https://github.com/chunge16/vitepress-blogs-theme/commit/6492a01))

### ❤️ Contributors

- Chunge <1362598656@qq.com>
- Chunge1945 ([@chunge16](http://github.com/chunge16))

## v0.2.0

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.20...v0.2.0)

### 🚀 Enhancements

- ✨  add Giscus comments ([16acc27](https://github.com/chunge16/vitepress-blogs-theme/commit/16acc27))

### 📖 Documentation

- 📝  add giscus docs ([03e3d71](https://github.com/chunge16/vitepress-blogs-theme/commit/03e3d71))

### ❤️ Contributors

- Chunge1945 <chunge1945@outlook.com>

## v0.1.20

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.19...v0.1.20)

### 🚀 Enhancements

- ✨  add post date Config ([203f0bd](https://github.com/chunge16/vitepress-blogs-theme/commit/203f0bd))

### 📖 Documentation

- 📝  up package.json homeage ([732b50e](https://github.com/chunge16/vitepress-blogs-theme/commit/732b50e))
- 📝  up frontmatter-post content ([d644720](https://github.com/chunge16/vitepress-blogs-theme/commit/d644720))
- 📝  up getting-started docs ([4632d33](https://github.com/chunge16/vitepress-blogs-theme/commit/4632d33))
- 📝  add dateConfig docs ([40267d0](https://github.com/chunge16/vitepress-blogs-theme/commit/40267d0))

### ❤️ Contributors

- Chunge1945 <chunge1945@outlook.com>

## v0.1.19

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.18...v0.1.19)

### 🩹 Fixes

- 🐛  fix examples icon missing ([92b7b2e](https://github.com/chunge16/vitepress-blogs-theme/commit/92b7b2e))

### 📖 Documentation

- **Tailwind:** 📝  change Tailwind doc content ([446705f](https://github.com/chunge16/vitepress-blogs-theme/commit/446705f))
- **icons:** 📝  up icons docs content ([1a3e81f](https://github.com/chunge16/vitepress-blogs-theme/commit/1a3e81f))
- **readme:** 📝  up readme ([9abc96d](https://github.com/chunge16/vitepress-blogs-theme/commit/9abc96d))

### ❤️ Contributors

- Chunge1945 <chunge1945@outlook.com>

## v0.1.18

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.17...v0.1.18)

### 🩹 Fixes

- 🐛  修复npm地址错误的问题 ([d0f1777](https://github.com/chunge16/vitepress-blogs-theme/commit/d0f1777))

### 📖 Documentation

- 📝  更正tags文档内容 ([117f630](https://github.com/chunge16/vitepress-blogs-theme/commit/117f630))

### 📦 Build

- 📦️  更正pack.json的部分包 ([d07d25a](https://github.com/chunge16/vitepress-blogs-theme/commit/d07d25a))
- 📦️  更新lock文件 ([3392982](https://github.com/chunge16/vitepress-blogs-theme/commit/3392982))

### ❤️ Contributors

- Chunge1945 <chunge1945@outlook.com>
- Chunge <1362598656@qq.com>

## v0.1.17

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.16...v0.1.17)

### 🚀 Enhancements

- ✨  文档新增国际化翻译 ([6202a9c](https://github.com/chunge16/vitepress-blogs-theme/commit/6202a9c))
- ✨  新增 搜索模块翻译 ([ec90d90](https://github.com/chunge16/vitepress-blogs-theme/commit/ec90d90))

### 🩹 Fixes

- 🐛  修复中文文档地址错误的问题 ([79d8938](https://github.com/chunge16/vitepress-blogs-theme/commit/79d8938))

### 💅 Refactors

- ♻️  优化博客配置 ([b1a7434](https://github.com/chunge16/vitepress-blogs-theme/commit/b1a7434))

### 📖 Documentation

- 📝  更新文档内容 ([b99fd84](https://github.com/chunge16/vitepress-blogs-theme/commit/b99fd84))
- 📝  更新 关于guide部分的中文翻译 ([dc701c5](https://github.com/chunge16/vitepress-blogs-theme/commit/dc701c5))
- 📝  文档添加图标 ([5d85400](https://github.com/chunge16/vitepress-blogs-theme/commit/5d85400))
- 📝  新增配置的中文翻译 ([2444419](https://github.com/chunge16/vitepress-blogs-theme/commit/2444419))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.16

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.15...v0.1.16)

### 🚀 Enhancements

- ✨  新增主题文档说明 ([d43b8e5](https://github.com/chunge16/vitepress-blogs-theme/commit/d43b8e5))
- ✨  新增说明文档 ([174ead4](https://github.com/chunge16/vitepress-blogs-theme/commit/174ead4))
- ✨  add czg ([8dd0c53](https://github.com/chunge16/vitepress-blogs-theme/commit/8dd0c53))
- ✨  add husky ([dc27522](https://github.com/chunge16/vitepress-blogs-theme/commit/dc27522))
- ✨  add eslint and fix bug ([f3ccb8c](https://github.com/chunge16/vitepress-blogs-theme/commit/f3ccb8c))

### 🩹 Fixes

- 🐛  修复 Get Started 按钮地址错误的问题 ([e39ff53](https://github.com/chunge16/vitepress-blogs-theme/commit/e39ff53))

### 📖 Documentation

- 📝  更新README ([a27a58e](https://github.com/chunge16/vitepress-blogs-theme/commit/a27a58e))
- 📝  修复Documentation地址错误 ([f8d71c7](https://github.com/chunge16/vitepress-blogs-theme/commit/f8d71c7))

### 📦 Build

- 📦️  pack.json add  "date-fns" ([796e043](https://github.com/chunge16/vitepress-blogs-theme/commit/796e043))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.15

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.14...v0.1.15)

### 💅 Refactors

- ♻️  去掉log的代码 ([c0c38dd](https://github.com/chunge16/vitepress-blogs-theme/commit/c0c38dd))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.14

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.13...v0.1.14)

## v0.1.13

[compare changes](https://github.com/chunge16/vitepress-blogs-theme/compare/v0.1.12...v0.1.13)

### 📖 Documentation

- 📝  更新package.json的内容 ([67d387d](https://github.com/chunge16/vitepress-blogs-theme/commit/67d387d))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.12


### 🩹 Fixes

- 🐛  修复部分页面URL错误的问题 ([bf0200b](https://github.com/chunge16/vitepress-blogs/commit/bf0200b))
- 🐛  修复头像字段 avatar 错误的问题 ([df6150f](https://github.com/chunge16/vitepress-blogs/commit/df6150f))

### 💅 Refactors

- ♻️  更新.gitignore ([4038e61](https://github.com/chunge16/vitepress-blogs/commit/4038e61))
- ♻️  优化自定义主题为继承方式 ([8ffe4f6](https://github.com/chunge16/vitepress-blogs/commit/8ffe4f6))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.11

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.10...v0.1.11)

### 🚀 Enhancements

- ✨  新增eslint规则 ([9581082](https://github.com/chunge16/vitepress-blogs/commit/9581082))

### 🩹 Fixes

- 🐛  修复点击标签名跳转地址错误 ([73b48f0](https://github.com/chunge16/vitepress-blogs/commit/73b48f0))
- 🐛  更正项目GitHub地址 ([6953dc4](https://github.com/chunge16/vitepress-blogs/commit/6953dc4))

### 📖 Documentation

- 📝  新增前端规划指南博客 ([b789503](https://github.com/chunge16/vitepress-blogs/commit/b789503))

### 📦 Build

- 📦️  新增 commitlint 和 lint-staged 规则 ([244b93d](https://github.com/chunge16/vitepress-blogs/commit/244b93d))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.10

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.9...v0.1.10)

### 🩹 Fixes

- 🐛  修复当文件名为非英文是，path路径错误的bug ([8804c25](https://github.com/chunge16/vitepress-blogs/commit/8804c25))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.9

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.8...v0.1.9)

## v0.1.8

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.7...v0.1.8)

### 🚀 Enhancements

- ✨  新增REDMME ([9c7da3f](https://github.com/chunge16/vitepress-blogs/commit/9c7da3f))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.7

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.6...v0.1.7)

## v0.1.6

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.4...v0.1.6)

### 📦 Build

- 🔧  修改pkg ([315df48](https://github.com/chunge16/vitepress-blogs/commit/315df48))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

## v0.1.4

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.3...v0.1.4)

## v0.1.3

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.2...v0.1.3)

## v0.1.2

[compare changes](https://github.com/chunge16/vitepress-blogs/compare/v0.1.1...v0.1.2)

## v0.1.1


### 🚀 Enhancements

- 修改默认主题 ([54778eb](https://github.com/chunge16/vitepress-blogs/commit/54778eb))
- 修改第三方主题 ([c14ab31](https://github.com/chunge16/vitepress-blogs/commit/c14ab31))
- ✨  新增主题配置说明文档 ([e0b0a97](https://github.com/chunge16/vitepress-blogs/commit/e0b0a97))

### 🩹 Fixes

- Fix github workflows ([16d435f](https://github.com/chunge16/vitepress-blogs/commit/16d435f))
- Fix  workflows  path ([9d63067](https://github.com/chunge16/vitepress-blogs/commit/9d63067))
- Add base ([d11ec81](https://github.com/chunge16/vitepress-blogs/commit/d11ec81))
- 🐛  修复头像错误 ([4352f70](https://github.com/chunge16/vitepress-blogs/commit/4352f70))

### ❤️  Contributors

- Chunge <1362598656@qq.com>

