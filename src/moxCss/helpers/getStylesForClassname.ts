const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssImport = require("postcss-import");

// Read and resolve @import statements
async function readAndResolveCSS(filePath: string) {
  const css = fs.readFileSync(filePath, "utf8");
  const result = await postcss([postcssImport]).process(css, {
    from: filePath,
  });
  return result.css;
}

// Parse and find styles for a classname
async function getStylesForClass(filePath: string, className: string) {
  const css = await readAndResolveCSS(filePath);
  const root = postcss.parse(css);
  let styles: string[] = [];
  root.walkRules((rule) => {
    if (rule.selector && rule.selector.includes(`.${className}`)) {
      styles.push(rule.toString());
    }
  });
  return styles;
}

// Usage
getStylesForClass("../index.css", "mox-box").then((styles) => {
  console.log(styles.join("\n\n"));
});
