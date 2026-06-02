# 什么是 VitePress Blog？
VitePress Blog 是一个基于 [VitePress](https://www.vitepress.dev) 的博客主题，目标不是替代 VitePress，而是把做博客时最常要补的那一层能力先帮你搭好。

很多人用 VitePress 写内容时，真正麻烦的不是 Markdown，而是博客列表、作者页、标签页、归档页，以及一套能长期维护下去的内容结构。VitePress Blog 把这些常见需求整理成一个可直接使用的主题，你依然用 [Markdown](https://en.wikipedia.org/wiki/Markdown) 写文章，用 `frontmatter` 管理元信息，也依然保留 VitePress 原本的开发体验。

<div class="tip custom-block" style="padding-top: 8px">

只是想试试？跳到  [快速入门](./getting-started)。

</div>

## 开发者体验

VitePress Blog 延续的是 VitePress 原本那套顺手的内容工作流：

- 继续用 Markdown 写文章
- 继续使用标准的 VitePress 配置方式
- 需要扩展时，依然可以直接接入 Vue 组件和主题逻辑
- 文档页和博客页可以共存在同一个项目里

它很适合个人博客、技术博客、更新日志站点，或者“文档 + 博客”混合型内容站。

## 它主要解决什么问题

VitePress 本身已经提供了很好的静态站点基础能力，而这个主题补上的，是很多内容型站点真正落地时都会需要的那一层博客能力：

- 给文章和作者资料页提供清晰的内容位置
- 内置标签页和归档页这类常见博客入口
- 同时兼顾“纯博客”和“文档 + 博客”两种站点形态
- 保持整体使用方式依然接近原生 VitePress

这样做的结果是，你可以先从一个很简单的内容站起步，再逐步把它扩展成更完整的发布型站点。
