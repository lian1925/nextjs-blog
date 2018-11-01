const SUMMARY_JSON = require("../../blog/dist/summary.json");

const path = {
  "/": { page: "/" },
  "/blog": { page: "/blog" },
  "/about": { page: "/about" },
  "/p/hello-nextjs": { page: "/article", query: { title: "Hello Next.js" } },
  "/p/learn-nextjs": {
    page: "/article",
    query: { title: "Learn Next.js is awesome" }
  },
  "/p/deploy-nextjs": {
    page: "/article",
    query: { title: "Deploy apps with Zeit" }
  }
};

const pathToExport = () => {
  let posts = {};
  SUMMARY_JSON.fileMap &&
    Object.keys(SUMMARY_JSON.fileMap).forEach(item => {
      if (item.indexOf("blog/dist/post") === 0) {
        const page = item
          .split("blog/dist")
          .join("")
          .split(".json")
          .join("");

        posts[page] = {
          page: "/blog-post",
          query: {
            fulUrl: page
          }
        };
      }
    });
  const result = { ...path, ...posts };
  console.log(result);
  return result;
};
module.exports = {
  pathToExport
};
