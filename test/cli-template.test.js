import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import { generateTemplate } from '../src/cli/template.js';

const originalCwd = process.cwd();

function baseAnswers(overrides = {}) {
  return {
    vitePressProjectRoot: './docs',
    siteTitle: 'My Blog',
    siteDescription: 'A test blog',
    siteUrl: '/',
    language: 'en-US',
    starterTemplate: 'demo',
    enableGiscus: false,
    giscusRepo: '',
    giscusRepoId: '',
    giscusCategoryId: '',
    defaultAuthor: 'Author',
    dateLocale: 'enUS',
    dateFormat: 'yyyy/MM/dd',
    addScripts: true,
    updateGitignore: true,
    overwriteExisting: false,
    ...overrides,
  };
}

async function withTempProject(fn) {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'vpb-init-'));

  process.chdir(dir);

  try {
    await fn(dir);
  } finally {
    process.chdir(originalCwd);
  }
}

test('generateTemplate wires scripts to custom project root', async () => {
  await withTempProject(async (dir) => {
    const result = await generateTemplate(baseAnswers({
      vitePressProjectRoot: './site',
    }));
    const pkg = JSON.parse(await fs.readFile(path.join(dir, 'package.json'), 'utf-8'));

    assert.equal(result.scripts.dev, 'site:dev');
    assert.equal(pkg.scripts['site:dev'], 'vitepress dev site');
    assert.equal(pkg.scripts['site:build'], 'vitepress build site');
    assert.equal(pkg.scripts['site:preview'], 'vitepress preview site');
  });
});

test('generateTemplate imports generated theme styles', async () => {
  await withTempProject(async (dir) => {
    await generateTemplate(baseAnswers());

    const themeEntry = await fs.readFile(path.join(dir, 'docs/.vitepress/theme/index.js'), 'utf-8');

    assert.match(themeEntry, /import '\.\/style\.css';/);
  });
});

test('generateTemplate minimal starter skips demo pages and posts', async () => {
  await withTempProject(async (dir) => {
    await generateTemplate(baseAnswers({
      starterTemplate: 'minimal',
    }));

    await assert.rejects(
      () => fs.access(path.join(dir, 'docs/markdown-examples.md')),
      /ENOENT/
    );
    await assert.rejects(
      () => fs.access(path.join(dir, 'docs/blog/posts/post1.md')),
      /ENOENT/
    );

    const config = await fs.readFile(path.join(dir, 'docs/.vitepress/config.js'), 'utf-8');

    assert.doesNotMatch(config, /markdown-examples/);
    assert.match(config, /sidebar: \[\]/);
  });
});

test('generateTemplate localizes demo content for Chinese sites', async () => {
  await withTempProject(async (dir) => {
    await generateTemplate(baseAnswers({
      language: 'zh-CN',
      dateLocale: 'zh-CN',
      starterTemplate: 'demo',
    }));

    const post = await fs.readFile(path.join(dir, 'docs/blog/posts/post1.md'), 'utf-8');
    const author = await fs.readFile(path.join(dir, 'docs/blog/authors/robot-editor.md'), 'utf-8');

    assert.match(post, /开始写第一篇博客/);
    assert.match(author, /机器人编辑/);
  });
});

test('generateTemplate updates gitignore even when scripts are skipped', async () => {
  await withTempProject(async (dir) => {
    await generateTemplate(baseAnswers({
      addScripts: false,
      updateGitignore: true,
    }));

    const gitignore = await fs.readFile(path.join(dir, '.gitignore'), 'utf-8');

    assert.match(gitignore, /docs\/\.vitepress\/cache/);
    assert.match(gitignore, /docs\/\.vitepress\/dist/);
  });
});

test('generateTemplate keeps existing files unless overwrite is enabled', async () => {
  await withTempProject(async (dir) => {
    await fs.mkdir(path.join(dir, 'docs'), { recursive: true });
    await fs.writeFile(path.join(dir, 'docs/index.md'), 'custom home', 'utf-8');

    await assert.rejects(
      () => generateTemplate(baseAnswers()),
      /files already exist/
    );

    assert.equal(await fs.readFile(path.join(dir, 'docs/index.md'), 'utf-8'), 'custom home');

    await generateTemplate(baseAnswers({
      overwriteExisting: true,
    }));

    assert.notEqual(await fs.readFile(path.join(dir, 'docs/index.md'), 'utf-8'), 'custom home');
  });
});

test('generateTemplate does not duplicate dependencies already declared elsewhere', async () => {
  await withTempProject(async (dir) => {
    await fs.writeFile(path.join(dir, 'package.json'), JSON.stringify({
      name: 'existing-site',
      type: 'module',
      devDependencies: {
        vitepress: '^1.6.4',
      },
    }), 'utf-8');

    await generateTemplate(baseAnswers());

    const pkg = JSON.parse(await fs.readFile(path.join(dir, 'package.json'), 'utf-8'));

    assert.equal(pkg.devDependencies.vitepress, '^1.6.4');
    assert.equal(pkg.dependencies.vitepress, undefined);
    assert.equal(pkg.dependencies['@chunge16/vitepress-blogs-theme'], 'latest');
  });
});
