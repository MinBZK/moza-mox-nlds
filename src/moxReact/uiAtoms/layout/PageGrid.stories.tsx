import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxPageGrid, pageGridStyleProps } from "./PageGrid";
import { MoxBox } from "./Box";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { MoxGridItem } from "./GridItem";

const meta = {
  title: "React/Atoms/Layout/PageGrid",
  component: MoxPageGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Bekijk deze pagina full-screen voor een beter beeld hoe het grid werkt en de zijkanten op laat schalen.",
      },
    },
  },
  args: {},
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(pageGridStyleProps),
  },
} satisfies Meta<typeof MoxPageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <MoxBox backgroundColor={"primary-subtle"} padding="md">
        {"Page Grid Content"}
      </MoxBox>
    ),
  },
};

export const FromWindowStart: Story = {
  args: {
    children: (
      <MoxGridItem gridColumnStart={"windowStart"}>
        <MoxBox backgroundColor={"primary-subtle"} padding="md">
          {"Page Grid Content"}
        </MoxBox>
      </MoxGridItem>
    ),
  },
};
