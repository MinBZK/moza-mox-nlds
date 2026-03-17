import type { Meta, StoryObj } from "@storybook/react-vite";
import { occupyStyleProps } from "../../../moxReact/uiAtoms";
import type { StylePropTypes } from "../../../moxReact/uiAtoms/AtomTypes";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { propsToClassNames } from "../../../moxReact/helpers/propsToClassNames";

const meta = {
  title: "MoxCSS/Atoms/layout/Occupy",
  tags: ["autodocs"],
  argTypes: getStylePropArgTypes(occupyStyleProps),
  args: {
    justifyContent: "center",
    alignContent: "center",
    size: "md",
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
          section { 
            border: 2px dotted orange;
          }
          section > i { 
            background-color: rgba(23, 165, 0, 0.2);
          }
        `}
        </style>
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

export const Default: StoryObj<StylePropTypes<typeof occupyStyleProps>> = {
  render: (props) => {
    const { stylePropClassNames } = propsToClassNames(occupyStyleProps, props);

    return (
      <section className={`mox-occupy ${stylePropClassNames.join(" ")}`}>
        <div className="mox-box mox-backgroundColor-primary-subtle mox-opacity-25- mox-size-4xl" />
      </section>
    );
  },
};
