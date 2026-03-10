import type { Meta, StoryObj } from "@storybook/react-vite";

import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { iconStyleProps, MoxAtomIcon } from "./Icon";

const meta = {
  title: "React/Atoms/Media/Icon",
  component: MoxAtomIcon,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(iconStyleProps),
  },
} satisfies Meta<typeof MoxAtomIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "Search",
  },
};
