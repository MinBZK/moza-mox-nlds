import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import type { props } from "../../mox.config";

export const richText = {
  p: { display: "block" },
  a: {
    // markup: "a",
    color: "primary",
    underline: "underline",
    underlineHover: "none",
  },
  blockquote: {
    // markup: "blockquote",
    backgroundColor: "primary-subtle-2",
    padding: "md",
    borderStartEndRadius: "lint-0.5",
  },
  "a.btn-primary": {
    backgroundColor: "primary",
    backgroundColorHover: "primary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing text block inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    fontWeight: "bold",
  },
  "a.btn-secondary": {
    backgroundColor: "secondary",
    backgroundColorHover: "secondary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing text block inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    fontWeight: "bold",
  },
  "a.btn-outline-primary": {
    backgroundColor: "plain-contrast",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing text block inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    borderColor: "primary",
    borderColorHover: "primary-hover",
    color: "primary",
    borderWidth: "2px",
    borderStyle: "solid",
    fontWeight: "bold",
  },
  "a.btn-outline-secondary": {
    backgroundColor: "plain-contrast",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing text block inside button */,
    paddingInline: "md",
    underline: "none",
    underlineHover: "none",
    display: "inline-block",
    borderColor: "secondary",
    borderColorHover: "secondary-hover",
    color: "secondary",
    borderWidth: "2px",
    borderStyle: "solid",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "primary",
    backgroundColorHover: "primary-hover",
    paddingBlock:
      "sm" /* small adjustment to compensate for missing text block inside button */,
    paddingInline: "md",
    display: "inline-block",
    fontWeight: "bold",
  },
} as const satisfies Record<
  string,
  StylePropTypes<readonly (keyof typeof props)[]>
>;
