import {
  colorOptions,
  globalGapOptions,
  globalSizeOptions,
  spaces,
} from "../configOptions";
import { mapOptionsToCSSVars } from "../helpers/mapOptionsToCSSVars";
import { mapOptionsToValues } from "../helpers/mapOptionsToValues";
import { type MoxConfigProps } from "../mox.config";

const borderRadiusOptions = {
  "0": { "border-radius": "0" },
  "1px": { "border-radius": "1px" },
  "2px": { "border-radius": "2px" },
  "4px": { "border-radius": "4px" },
  "8px": { "border-radius": "8px" },
  circle: { "border-radius": "50%" },
} as const;

const getSingleBorderRadiusOptions = (
  position: "start-start" | "start-end" | "end-start" | "end-end"
) => {
  return {
    ...borderRadiusOptions,
    "lint-0.25": {
      [`border-${position}-radius`]: "calc(0.25 * var(--mox-lint-inline-size))",
    },
    "lint-0.5": {
      [`border-${position}-radius`]: "calc(0.5 * var(--mox-lint-inline-size))",
    },
    "lint-1": {
      [`border-${position}-radius`]: "calc(1 * var(--mox-lint-inline-size))",
    },
    "lint-2": {
      [`border-${position}-radius`]: "calc(2 * var(--mox-lint-inline-size))",
    },
    "lint-4": {
      [`border-${position}-radius`]: "calc(4 * var(--mox-lint-inline-size))",
    },
    "lint-8": {
      [`border-${position}-radius`]: "calc(8 * var(--mox-lint-inline-size))",
    },
  };
};

export const boxProps = {
  borderRadius: {
    options: borderRadiusOptions,
    responsive: true,
  },
  borderStartStartRadius: {
    options: getSingleBorderRadiusOptions("start-start"),
    responsive: true,
  },
  borderStartEndRadius: {
    options: getSingleBorderRadiusOptions("start-end"),
    responsive: true,
  },
  borderEndStartRadius: {
    options: getSingleBorderRadiusOptions("end-start"),
    responsive: true,
  },
  borderEndEndRadius: {
    options: getSingleBorderRadiusOptions("end-end"),
    responsive: true,
  },
  borderWidth: {
    options: {
      "0": { "border-width": "0" },
      "1px": { "border-width": "1px" },
      "2px": { "border-width": "2px" },
      "4px": { "border-width": "4px" },
      "8px": { "border-width": "8px" },
    },
  },
  borderColor: {
    options: mapOptionsToCSSVars(colorOptions, ["border-color"], "color"),
  },
  borderStyle: {
    options: {
      solid: { "border-style": "solid" },
      dashed: { "border-style": "dashed" },
      dotted: { "border-style": "dotted" },
      none: { "border-style": "none" },
    },
  },
  backgroundColor: {
    options: colorOptions.reduce(
      (acc, propName) => ({
        ...acc,
        [propName as keyof typeof colorOptions]: {
          "background-color": `var(--mox-color-${propName})`,
          "--mox-text-color": `var(--mox-color-${propName}-contrast)`,
        },
      }),
      {}
    ) as Record<(typeof colorOptions)[number], Record<string, string>>,
  },
  size: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["inline-size", "block-size"], "space"),
      ...mapOptionsToValues(globalSizeOptions, ["inline-size", "block-size"]),
    },
    responsive: true,
  },
  inlineSize: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["inline-size"], "space"),
      ...mapOptionsToValues(globalSizeOptions, ["inline-size"]),
    },
    responsive: true,
  },
  blockSize: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["block-size"], "space"),
      ...mapOptionsToValues(globalSizeOptions, ["block-size"]),
    },
    responsive: true,
  },
  padding: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding"]),
    },
    responsive: true,
  },
  paddingBlock: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-block"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-block"]),
    },
    responsive: true,
  },
  paddingInline: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-inline"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-inline"]),
    },
    responsive: true,
  },
  paddingBlockStart: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-block-start"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-block-start"]),
    },
    responsive: true,
  },
  paddingBlockEnd: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-block-end"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-block-end"]),
    },
    responsive: true,
  },
  paddingInlineStart: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-inline-start"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-inline-start"]),
    },
    responsive: true,
  },
  paddingInlineEnd: {
    options: {
      ...mapOptionsToCSSVars(spaces, ["padding-inline-end"], "space"),
      ...mapOptionsToValues(globalGapOptions, ["padding-inline-end"]),
    },
    responsive: true,
  },
} as const satisfies MoxConfigProps;
