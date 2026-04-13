import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxBadge } from "./Badge";
import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";

const meta = {
  title: "React/Components/Badge",
  component: MoxBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
              <MoxBox
                    borderRadius="circle"
                    padding="6xs"
                    backgroundColor={backgroundColor}
                    minInlineSize="md"
                    {...props}
                  >
                    <MoxTextBlock fontSize="xs" underline="none" textAlign="center">
                      {children}
                    </MoxTextBlock>
                  </MoxBox>
            `),
      },
    },
  },
  args: {
    children: "I am a badge!",
  },
  argTypes: {
    ...getStylePropArgTypes(["backgroundColor"]),
  },
} satisfies Meta<typeof MoxBadge>;

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
