import { defineConfig } from 'vitepress';
import {processData} from "../../src/config/index.js";
import enConfig from "./locales/en.js";
import zhConfig from "./locales/zh.js";
import {shareConfig} from "./share.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shareConfig,
  locales: {
    root: { label: 'English', lang: 'en-US', ...enConfig },
    zh: { label: '简体中文', lang: 'zh-CN', ...zhConfig },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});



