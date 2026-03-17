import type { MoxConfigProps } from "../mox.config";

const css = String.raw;

export const linkProps = {
  underline: {
    options: {
      underline: css`
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      `,
      strikethrough: css`
        text-decoration: line-through;
      `,
      none: css`
        text-decoration: none;
      `,
    },
  },
  underlineHover: {
    options: {
      underline: css`
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      `,
      strikethrough: css`
        text-decoration: line-through;
      `,
      none: css`
        text-decoration: none;
      `,
    },
    state: "hover",
  },
} as const satisfies MoxConfigProps;
