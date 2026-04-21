import { posix as posixPath } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { moxConfig } from "./mox.config";
import * as fs from "fs";
import { spaces } from "./configOptions";
import { format } from "prettier";
import { richText } from "./uiAtoms/richText/richText.config";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get rid of any special characters in the option key to create a valid CSS class name
const slugifyOption = (option: string) => {
  return option.replace(/[^a-zA-Z0-9-]/g, "-");
};

const getClassName = ({
  propKey,
  optionKey,
  responsiveKey,
  state,
}: {
  propKey: string;
  optionKey: string;
  responsiveKey?: string;
  state?: "hover" | "active" | "focus" | "disabled";
}) => {
  return `.${moxConfig.prefix}-${propKey}-${slugifyOption(optionKey)}${
    responsiveKey != null ? `\\@${responsiveKey}` : ""
  }${state != null ? `-${state}:${state}` : ""}`;
};

/**
 * Function to generate CSS class files based on the Mox configuration.
 * It reads the configuration from `mox.config.ts` and creates CSS files
 * in the `_generated/classNames` directory for each defined class name.
 *
 * These classNames are used for the `propsToClassNames.ts` utility to map props to styles.
 */
const generateProps = async () => {
  const files: string[] = [];

  for (const [propKey, { options, ...restProp }] of Object.entries(
    moxConfig.props,
  )) {
    const responsive =
      "responsive" in restProp && restProp.responsive ? true : false;
    const state =
      "state" in restProp
        ? (restProp.state as "hover" | "focus" | "active" | "disabled")
        : undefined;

    // Create a separate CSS file for each property
    const result: Array<string> = [
      `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
*/

@layer props {`,
    ];
    for (const [optionKey, css] of Object.entries(options)) {
      result.push(`${getClassName({
        propKey,
        optionKey,
        state,
      })} {
${css}  
}`);
    }

    if (responsive) {
      // For each viewport breakpoint...
      for (const key of Object.keys(moxConfig.viewportBreakpoints)) {
        const width =
          moxConfig.viewportBreakpoints[
            key as keyof typeof moxConfig.viewportBreakpoints
          ];
        result.push(`/* Viewport breakpoint: ${key} (${width}px) */`);

        // ... add a min and max media query...
        for (const direction of ["Min", "Max"] as const) {
          result.push(
            `@media only screen and (${direction.toLowerCase()}-device-width: ${width}px) {`,
          );

          // ... for each option
          for (const [optionKey, css] of Object.entries(options)) {
            result.push(`${getClassName({
              propKey,
              optionKey,
              responsiveKey: `${key}${direction}`,
              state,
            })} {
${css}
}`);
          }

          result.push(`}`);
        }
      }
      // For each container breakpoint...
      for (const key of Object.keys(moxConfig.containerBreakpoints)) {
        const width =
          moxConfig.containerBreakpoints[
            key as keyof typeof moxConfig.containerBreakpoints
          ];
        result.push(`/* Container breakpoint: ${key} (${width}px) */`);

        // ... add a min and max container query...
        for (const direction of ["Min", "Max"] as const) {
          result.push(
            `@container (${direction.toLowerCase()}-width: ${width}px) {`,
          );

          // ... for each option
          for (const [optionKey, css] of Object.entries(options)) {
            result.push(`${getClassName({
              propKey,
              optionKey,
              responsiveKey: `${key}${direction}`,
              state,
            })} {
${css}
}`);
          }

          result.push(`}`);
        }
      }
    }

    result.push(`}`); // end of @layer

    // Write the generated CSS to a file
    const cssString = result.join("\n");
    const formattedCss = await format(cssString, { parser: "css" });

    const dirPath = posixPath.join(__dirname, "_generated", "properties");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(posixPath.join(dirPath, `${propKey}.css`), formattedCss);
    files.push(`./${propKey}.css`);
  }

  // Write an index file exporting all generated files
  fs.writeFileSync(
    posixPath.join(__dirname, "_generated", "properties", `index.css`),
    files.map((file) => `@import '${file}';`).join("\n"),
  );

  console.info(
    `✅ Generated properties:\n${Object.keys(moxConfig.props).join(", ")}\n`,
  );
};

const generateClampSpaces = () => {
  // loop through all spaces and generate separate files for each space with the clamp values
  // We calculate the fluid size, based on calculated CSS-vars. Since the `v` value is converted to px, it is divided by `1px` to get a unitless value which we can multiply with the viewport-width.
  spaces.forEach((space) => {
    const clampValues = `
/**
  * This file is auto-generated. Do not edit directly.
  * Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
  *
  * Responsive spacing for the space-size \`${space}\`
*/

@layer tokens.overrides {
  :root {
    --mox-font-scale-${space}-fluid: calc(1vw * calc(var(--mox-font-scale-${space}-v) / 1px) + var(--mox-font-scale-${space}-r));
    --mox-font-scale-${space}: clamp(
      var(--mox-font-scale-${space}-min),
      var(--mox-font-scale-${space}-fluid),
      var(--mox-font-scale-${space}-max)
    );
    --mox-space-${space}: var(--mox-font-scale-${space});
  }
}
        `;
    fs.writeFileSync(
      posixPath.join(
        __dirname,
        "_generated",
        "clampSpaces",
        `clamp-${space}.css`,
      ),
      clampValues,
    );
  });
  // Write an index file exporting all generated files
  const dirPath = posixPath.join(__dirname, "_generated", "clampSpaces");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(
    posixPath.join(dirPath, `index.css`),
    [
      `
/** These imports calculate the correct clamp value for fluid scaling for each space-size (md, xs, etc): 
  * See: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
*/
`,
      ...spaces.map((space) => `@import 'clamp-${space}.css';`),
    ].join("\n"),
  );

  console.info(
    `✅ Generated clamp space files for spaces:\n${spaces.join(", ")}\n`,
  );
};

/**
 * Given a prop name and option key, returns the CSS string for that option.
 * Example: getCssForPropOption("alignItems", "start") -> "align-items: flex-start;"
 */
export function getCssForPropOption(
  prop: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  option: any, // StylePropTypes<typeof moxConfig.props>[string],
): string | undefined {
  const propConfig = moxConfig.props[prop as keyof typeof moxConfig.props];
  if (!propConfig) return undefined;

  return propConfig.options[option as keyof typeof propConfig.options];
}

export const generateRichTextStyles = async () => {
  const richTextWrapperClass = ":where(.mox-rich-text)"; // using :where to avoid specificity issues with other styles applied to the same tags
  const result = [
    `
/**
* This file is auto-generated. Do not edit directly.
* Generated from src/moxCss/mox.config.ts and script: \`generateCss.ts\`
*/

@layer atoms {`,
  ];

  for (const [tag, styles] of Object.entries(richText)) {
    result.push(`/* Styles for <${tag}> */`);
    const simpleStyles = Object.entries(styles)
      .filter(([_, value]) => typeof value === "string")
      .map(([prop, value]) => {
        const propConfig =
          moxConfig.props[prop as keyof typeof moxConfig.props];
        const stateSuffix = "state" in propConfig ? `:${propConfig.state}` : "";
        const css = getCssForPropOption(prop, value);
        return css
          ? `${richTextWrapperClass} ${tag}${stateSuffix} { ${css.trim()} }`
          : "";
      })
      .join("");

    // Collect all simple (non-responsive) styles in a single css-block
    if (simpleStyles) {
      result.push(simpleStyles);
    }

    const responsiveStyles = Object.entries(styles)
      .filter(([_, value]) => typeof value === "object")
      .map(([prop, value]) => {
        const propConfig =
          moxConfig.props[prop as keyof typeof moxConfig.props];
        const stateSuffix = "state" in propConfig ? `:${propConfig.state}` : "";

        return Object.entries(value)
          .map(([responsiveKey, responsiveValue]) => {
            const css = getCssForPropOption(prop, responsiveValue);
            if (!css) return "";

            const breakpointType = responsiveKey.replace(/(Min|Max)$/, "");
            const breakpointDirection = responsiveKey.endsWith("Min")
              ? "min"
              : responsiveKey.endsWith("Max")
                ? "max"
                : null;

            if (
              breakpointType in moxConfig.viewportBreakpoints &&
              breakpointDirection != null
            ) {
              return `@media only screen and (${breakpointDirection}-width: ${moxConfig.viewportBreakpoints[breakpointType as keyof typeof moxConfig.viewportBreakpoints]}px) {
                ${richTextWrapperClass} ${tag}${stateSuffix} {
                  ${css}
                }
              }`;
            } else if (
              breakpointType in moxConfig.containerBreakpoints &&
              breakpointDirection != null
            ) {
              return `@container only screen and (${breakpointDirection}-width: ${moxConfig.containerBreakpoints[breakpointType as keyof typeof moxConfig.containerBreakpoints]}px) {
                ${richTextWrapperClass} ${tag}${stateSuffix} {
                  ${css}
                }
              }`;
            }
          })
          .join("");
      })
      .join("");

    if (responsiveStyles) {
      result.push(responsiveStyles);
    }
  }

  result.push(`}`); // end of @layer

  const formattedCss = await format(result.join("\n"), { parser: "css" });
  const dirPath = posixPath.join(__dirname, "_generated", "richText");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(posixPath.join(dirPath, `index.css`), formattedCss);

  console.info(
    `✅ Generated rich text styles for tags:\n${Object.keys(richText).join(", ")}\n`,
  );
};

// Todo: clean generated folder first?
generateProps();
generateClampSpaces();
generateRichTextStyles();
