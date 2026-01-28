import { intro, outro, text, select, confirm, isCancel, cancel, group } from '@clack/prompts';
import pc from 'picocolors';
import { generateTemplate } from './template.js';

export async function init() {
  intro(pc.inverse(' VitePress Blog Theme Init '));

  const answers = await group(
    {
      projectRoot: () =>
        text({
          message: 'Where should VitePress initialize the config?',
          placeholder: './docs',
          initialValue: './docs',
        }),
      siteTitle: () =>
        text({
          message: 'Site title:',
          placeholder: 'My Awesome Blog',
          initialValue: 'My Awesome Blog',
        }),
      siteDescription: () =>
        text({
          message: 'Site description:',
          placeholder: 'A VitePress Blog with Theme',
          initialValue: 'A VitePress Blog with Theme',
        }),
      siteUrl: () =>
        text({
          message: 'Site base URL:',
          placeholder: '/',
          initialValue: '/',
        }),
      language: () =>
        select({
          message: 'Choose site language:',
          options: [
            { value: 'zh-CN', label: '简体中文 (zh-CN)' },
            { value: 'en-US', label: 'English (en-US)' },
          ],
          initialValue: 'zh-CN',
        }),
      defaultAuthor: () =>
        text({
          message: 'Default author name:',
          placeholder: 'Blog Author',
          initialValue: 'AI Writer',
        }),
      enableGiscus: () =>
        confirm({
          message: 'Enable Giscus comments?',
          initialValue: false,
        }),
      giscusRepo: ({ results }) => {
        if (!results.enableGiscus) return;
        return text({
          message: 'GitHub repository (format: owner/repo):',
          placeholder: 'owner/repo',
          validate: (value) => {
            if (!value) return 'Please enter a repository.';
          },
        });
      },
      giscusRepoId: ({ results }) => {
        if (!results.enableGiscus) return;
        return text({
          message: 'Giscus Repository ID:',
          validate: (value) => {
            if (!value) return 'Please enter a repository ID.';
          },
        });
      },
      giscusCategoryId: ({ results }) => {
        if (!results.enableGiscus) return;
        return text({
          message: 'Giscus Category ID:',
          validate: (value) => {
            if (!value) return 'Please enter a category ID.';
          },
        });
      },
      addScripts: () =>
        select({
          message: 'Add VitePress npm scripts to package.json?',
          options: [
            { value: true, label: 'yes' },
            { value: false, label: 'no' },
          ],
          initialValue: true,
        }),
      dateFormat: () =>
        select({
          message: 'Date format:',
          options: [
            { value: 'yyyy/MM/dd', label: 'yyyy/MM/dd (e.g., 2024/01/26)' },
            { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy (e.g., 01/26/2024)' },
            { value: 'dd/MM/yyyy', label: 'dd/MM/yyyy (e.g., 26/01/2024)' },
          ],
          initialValue: 'yyyy/MM/dd',
        }),
    },
    {
      onCancel: () => {
        cancel('Operation cancelled.');
        process.exit(0);
      },
    }
  );

  // Post-process answers
  const finalAnswers = {
    ...answers,
    dateLocale: answers.language === 'en-US' ? 'enUS' : 'zh-CN',
    giscusRepo: answers.giscusRepo || '',
    giscusRepoId: answers.giscusRepoId || '',
    giscusCategoryId: answers.giscusCategoryId || '',
  };

  await generateTemplate(finalAnswers);

  outro(
    `Done! Now run:\n\n  ${pc.green(`cd ${finalAnswers.projectRoot}`)}\n  ${pc.green('pnpm install')}\n  ${pc.green('pnpm run docs:dev')}\n\nand start writing.`
  );
}
