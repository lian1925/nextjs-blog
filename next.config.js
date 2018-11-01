const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const path = require("./src/utils/exportPath");

module.exports = withCSS(
  withSass({
    exportPathMap: function() {
      return path.pathToExport();
    }
  })
);
