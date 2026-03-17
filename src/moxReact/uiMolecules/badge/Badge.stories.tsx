import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxMoleculeBadge } from "./Badge";

const meta = {
  title: "React/Molecules/Badge",
  component: MoxMoleculeBadge,
  tags: ["autodocs"],
  parameters: {},
  args: {
    children: "I am a badge!",
  },
  argTypes: {},
} satisfies Meta<typeof MoxMoleculeBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const BackgroundColor: Story = {
  args: {
    backgroundColor: "primary",
  },
};
