export function createContentMap() {
  const markdownModules = import.meta.glob('../../content/docs/**/*.md', { eager: true });
  const contentMap: { [key: string]: { [key: string]: any } } = {};
  
  for (const [path, module] of Object.entries(markdownModules)) {
    // Extract lang and slug from path pattern like: ../../content/docs/en/introduction.md
    const match = path.match(/\/([a-z]{2})\/([^\/]+)\.md$/i);
    if (match) {
      const [, lang, slug] = match;
      if (!contentMap[lang]) {
        contentMap[lang] = {};
      }
      contentMap[lang][slug] = module;
    }
  }
  
  return contentMap;
}
