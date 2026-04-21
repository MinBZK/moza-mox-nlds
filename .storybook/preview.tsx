import "../src/moxCss/index.css";
import "./docs.css";

import type { Preview } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import { useEffect } from "react";

const css = String.raw;

const ThemeDecorator = ({ children, theme }) => {
  useEffect(() => {
    const prefix =
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/moza-mox-nlds")
        ? "/moza-mox-nlds"
        : "";
    fetch(`${prefix}/src/moxCss/tokens/tokens-${theme}.css`)
      .then((response) => response.text())
      .then((css) => {
        let style = document.getElementById("theme-style") as HTMLStyleElement;
        if (!style) {
          style = document.createElement("style");
          style.id = "theme-style";
          document.head.appendChild(style);
        }
        style.innerHTML = css;
      });
  }, [theme]);

  return children;
};

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
          "Waarom?",
          "Atomic system",
          "Design tokens",
          "Scaling system",
          "Icons",
          "*",
          "MoxCSS",
          ["CSS Layers", "Text-box trim", "Hugo gebruik", ["Atoms", "*"]],
          "React",
          ["Gebruik", "Properties", ["Atoms", "Components", "*"]],
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
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "mox-light",
      toolbar: {
        icon: "circlehollow",
        items: [
          {
            value: "mox-light",
            icon: "circlehollow",
            title: "Light",
          },
          {
            value: "mox-dark",
            icon: "circle",
            title: "Dark",
          },
        ],
      },
    },
  },
  initialGlobals: {
    viewport: { value: "ipad", isRotated: false },
  },
  decorators: [
    (Story, context) => (
      <ThemeDecorator theme={context.globals.theme || "mox-light"}>
        <div>
          <style>
            {css`
            @layer reset {
              :is(details, summary, ol, ul, li, strong, em) {
                all: revert;
              }

              .docs-story :is(details, summary, ol, ul, li, strong, em) {
                all: unset;
              }

              .docs-story {
                background-color: var(--mox-color-plain);
                border-block-end: 2px solid white;
              }
            `}
          </style>
          <Story />
        </div>
      </ThemeDecorator>
    ),
  ],
};

export default preview;
