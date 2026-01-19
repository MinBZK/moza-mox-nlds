import "../src/moxCss/tokens.css";
import "../src/moxCss/index.css";

import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "responsive",
    },
    options: {
      storySort: {
        order: [
          "Intro",
          "Atomic system",
          "Scaling system",
          "Icons",
          "*",
          "MoxCSS",
          ["CSS Layers", "Hugo gebruik", "Text-box trim", ["Atoms", "*"]],
          "React",
          ["Gebruik", ["Atoms", "Molecules", "Organisms", "*"]],
        ],
        method: "alphabetical",
      },
    },
    test: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "off",
    },
    docs: {
      codePanel: true,
      canvas: {
        // Show code by default.
        // Stories without concise code snippets can hide the code at Story level.
        sourceState: "shown",
      },
      source: {
        excludeDecorators: true,
      },
      controls: {},
    },
  },
  initialGlobals: {
    viewport: { value: "ipad", isRotated: false },
  },
  decorators: [
    (Story) => {
      document.body.classList.add("mox-theme-1");
      // Optionally, remove the class when the story unmounts:
      return (
        <div>
          <style>
            {`
            @layer overwrites {
             details, summary, ol, ul, li, strong, em { 
              all: revert; 
              }
            }
            `}
          </style>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
