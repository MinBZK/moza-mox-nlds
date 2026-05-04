import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxAtomLink } from "./Link";
import { MoxText } from "../typography/Text";
import { MoxBox } from "../layout/Box";

const meta = {
  title: "React/Atoms/Interactive/Link",
  component: MoxAtomLink,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: <MoxText>Click me!</MoxText>,
  },
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof MoxAtomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    underline: "none",
    underlineHover: "underline",
  },
};

export const InlineText: Story = {
  args: {
    underline: "underline",
    underlineHover: "none",
  },
};

export const LinkBox: Story = {
  args: {
    underline: "underline",
    underlineHover: "none",
    children: (
      <MoxBox
        padding="xl"
        borderColor="plain"
        borderStyle={"dashed"}
        borderWidth={"2px"}
      >
        <MoxText>I am a link box</MoxText>
      </MoxBox>
    ),
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    type: "button",
    onClick: () => alert("Link as button clicked!"),
  },
};
