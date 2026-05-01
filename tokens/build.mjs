import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";
import fs from "fs";

StyleDictionary.registerTransform({
  name: "name/cti/omit-default",
  type: "name",
  transform: function (token) {
    return token.path
      .filter((part) => part !== "default") // Remove 'default' from the path
      .join("-");
  },
});

// Register the tokens-studio sd-transforms package
register(StyleDictionary, { excludeParentKeys: true });

// Register a custom format for CSS variables with @layer
StyleDictionary.registerFormat({
  name: "css/variables-with-layer",
  format: function ({ dictionary, options = {} }) {
    const { selector = ":root", layer = "tokens" } = options;

    // Generate the CSS variables (similar to the built-in format)
    const variables = dictionary.allTokens
      .map((token) => {
        const comment = token.$description
          ? `  /* ${token.$description} */`
          : "";
        const value = token.$value;
        const name = token.name;
        return `--${name}: ${value};${comment}`;
      })
      .join("\n");

    // Wrap in @layer
    return `@layer ${layer} {\n${selector} {\n${variables}\n}\n}`;
  },
});

// Apply the custom file header to the Style Dictionary instance
StyleDictionary.registerFileHeader({
  name: "nlds-mox-header",
  fileHeader: function (defaultMessage) {
    return [...defaultMessage, `Generated on ${new Date().toUTCString()}`];
  },
});

const build = async () => {
  try {
    // Read and parse the tokens file
    const tokensData = JSON.parse(
      fs.readFileSync("./tokens/figma.tokens.json", "utf8"),
    );
    const themes = tokensData.$themes;

    // Group themes by group
    const groups = {};
    themes.forEach((theme) => {
      if (!groups[theme.group]) {
        groups[theme.group] = [];
      }
      groups[theme.group].push(theme);
    });

    // For each group, take the first theme and generate CSS (other themes inside a group are only for Figma responsiveness)
    for (const groupName in groups) {
      const groupThemes = groups[groupName];
      const firstTheme = groupThemes[0];
      const selectedTokenSets = firstTheme.selectedTokenSets;

      // Filter tokens based on selectedTokenSets
      const filteredTokens = {};
      for (const setKey in tokensData) {
        if (setKey === "$themes") continue;
        if (selectedTokenSets[setKey] === "enabled") {
          filteredTokens[setKey] = tokensData[setKey];
        }
      }

      // Determine filename: id without @ and after
      const themeIdBase = firstTheme.id.split("@")[0];
      const destination = `tokens-${themeIdBase}.css`;

      // Create config for this theme
      const config = {
        tokens: filteredTokens,
        preprocessors: ["tokens-studio"],
        log: { verbosity: "verbose" },
        platforms: {
          css: {
            transformGroup: "tokens-studio",
            transforms: ["name/kebab", "name/cti/omit-default"],
            buildPath: "./src/moxCss/tokens/",
            files: [
              {
                destination,
                format: "css/variables-with-layer",
                options: {
                  fileHeader: "nlds-mox-header",
                  selector: `.theme-${themeIdBase}`,
                  layer: "tokens.base",
                  outputReferences: false,
                },
              },
            ],
          },
        },
      };

      const SD = new StyleDictionary(config);
      await SD.hasInitialized;
      await SD.cleanAllPlatforms();
      await SD.buildAllPlatforms();
      console.log(
        `✅ CSS variables for ${themeIdBase} have been generated successfully!`,
      );
    }
  } catch (error) {
    console.error(error);
  }
};

build();
