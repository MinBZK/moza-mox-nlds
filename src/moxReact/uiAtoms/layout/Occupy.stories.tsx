import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxOccupy } from "./Occupy";
import { MoxBox } from "./Box";

const meta = {
  title: "React/Atoms/Layout/Occupy*",
  component: MoxOccupy,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: (
      <MoxBox
        backgroundColor="primary-subtle"
        size="4xl"
        opacity="25%"
      ></MoxBox>
    ),
  },
} satisfies Meta<typeof MoxOccupy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    justifyContent: "center",
    alignContent: "center",
    size: "md",
    style: { border: "2px dotted orange" },
  },
};
