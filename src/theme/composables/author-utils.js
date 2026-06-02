function normalizeName(raw, url) {
  if (typeof raw === 'string' && raw.trim()) {
    return raw.trim();
  }

  const fallback = 'Unknown Author';
  console.warn(`[vitepress-blogs-theme] Missing author name frontmatter. Falling back to "${fallback}". (${url})`);
  return fallback;
}

function transformAuthors(raw) {
  return raw
    .map(({ url, frontmatter, excerpt }) => ({
      name: normalizeName(frontmatter?.name, url),
      avatar: frontmatter?.avatar ?? null,
      gravatar: frontmatter?.gravatar ?? null,
      twitter: frontmatter?.twitter ?? null,
      url,
      excerpt,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export {
  normalizeName,
  transformAuthors,
};
