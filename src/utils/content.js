export function makeUrl(article) {
  return `${article.dir.split("blog/dist").join("")}/${article.base
    .split(".json")
    .join("")}`;
}

export function filterPosts(summaryJson) {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .filter(file => {
        if (file.indexOf("blog/dist/post") === 0) {
          return true;
        }
      })
      .map(file => {
        return summaryJson.fileMap[file];
      })
      .sort((a, b) => {
        const aDate = Date.parse(a.date);
        const bDate = Date.parse(b.date);
        return bDate > aDate ? 1 : bDate < aDate ? -1 : 0;
      })
  );
}
