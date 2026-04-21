import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";
import { posix } from "path";
import { fixCSSFile } from "./cssFixers.mjs";

StyleDictionary.registerTransform({
  name: "name/cti/omit-default",
  type: "name",
  transform: function (token) {
    return token.path
      .filter((part) => part !== "default") // Remove 'default' from the path
      .join("-");
  },
});

StyleDictionary.registerAction({
  name: "fixCSSTokens",
  do: async function (_dictionary, config) {
    const buildPath = config.buildPath || "dist/";
    const files = config.files || [];
    // TS allows roundTo(), exponentiation (^) and basic calculations (without `calc()`) in their values, but these are not valid CSS.
    for (const file of files) {
      const filePath = posix.join(buildPath, file.destination);
      console.log("🔧 fixing css:", filePath);
      await fixCSSFile(filePath);
    }
  },
  // No undo action available - files are deleted during cleanup.
  undo: function () {},
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

// Define the configuration for Style Dictionary
const config = {
  source: ["./tokens/figma.tokens.json"],
  preprocessors: ["tokens-studio"],
  log: { verbosity: "verbose" },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab", "name/cti/omit-default"],
      buildPath: "./src/moxCss/",
      // actions: ["fixCSSTokens"],
      files: [
        {
          destination: "tokens.css",
          format: "css/variables-with-layer", // Use the custom format
          options: {
            fileHeader: "nlds-mox-header", // Explicitly apply the custom header
            selector: ":root",
            layer: "tokens.base",
            // outputReferences: true,
          },
        },
      ],
    },
  },
};

// Apply the custom file header to the Style Dictionary instance
StyleDictionary.registerFileHeader({
  name: "nlds-mox-header",
  fileHeader: function (defaultMessage) {
    return [...defaultMessage, `Generated on ${new Date().toUTCString()}`];
  },
});

const build = async () => {
  try {
    const SD = new StyleDictionary(config);
    await SD.hasInitialized;
    await SD.cleanAllPlatforms();
    await SD.buildAllPlatforms();
    console.log("✅ CSS variables have been generated successfully!");
  } catch (error) {
    console.error(error);
  }
};

build();
