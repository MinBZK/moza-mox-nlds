import type { Meta, StoryObj } from "@storybook/react-vite";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";
import { iconStyleProps } from "../../../moxReact/uiAtoms/media/Icon";
import { iconNames } from "../../../moxIcons/iconNames";

const meta = {
  title: "MoxCSS/Atoms/Media/Icon",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(iconStyleProps),
  args: {},
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        code: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style></style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj<StylePropTypes<typeof iconStyleProps>> = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    fontSize: "xl",
    color: "primary",
  },
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(iconStyleProps, props);

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gap: "1.5rem",
          padding: "2rem",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {iconNames.map((icon) => (
          <div key={icon} style={{ textAlign: "center" }}>
            <i
              className={`bi-${icon} mox-icon ${stylePropClassNames.join(" ")}`}
            ></i>
            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "0.85em",
                color: "grey",
              }}
            >
              {icon}
            </div>
          </div>
        ))}
      </div>
    );
  },
};
