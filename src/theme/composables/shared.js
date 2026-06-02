function normalizePath(path) {
  const decoded = decodeURI(path ?? '');
  const withoutHtml = decoded.replace(/\.html$/, '');
  const withoutIndex = withoutHtml.replace(/\/index$/, '');

  return withoutIndex.replace(/\/$/, '') || '/';
}

function normalizeRelativePath(path) {
  return String(path ?? '')
    .replace(/\\/g, '/')
    .replace(/^\.?\//, '')
    .replace(/\/$/, '');
}

function getBlogConfig() {
  return globalThis?.VITEPRESS_CONFIG?.site?.themeConfig?.blog ?? {};
}

function isPathWithinDirectory(path, directory) {
  const normalizedPath = normalizeRelativePath(path);
  const normalizedDirectory = normalizeRelativePath(directory);

  return normalizedPath === normalizedDirectory || normalizedPath.startsWith(`${normalizedDirectory}/`);
}

function findEntryIndex(entries, currentPath) {
  const normalizedCurrentPath = normalizePath(currentPath);

  return entries.findIndex((entry) => normalizePath(entry?.url) === normalizedCurrentPath);
}

function resolveAdjacentEntries(entries, currentPath) {
  const currentIndex = findEntryIndex(entries, currentPath);

  return {
    currentIndex,
    current: currentIndex >= 0 ? entries[currentIndex] : null,
    next: currentIndex > 0 ? entries[currentIndex - 1] : null,
    prev: currentIndex >= 0 ? entries[currentIndex + 1] ?? null : null,
  };
}

export {
  findEntryIndex,
  getBlogConfig,
  isPathWithinDirectory,
  normalizePath,
  normalizeRelativePath,
  resolveAdjacentEntries,
};
