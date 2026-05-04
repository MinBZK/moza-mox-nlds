import type { Meta, StoryObj } from "@storybook/react-vite";

import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";
import { MoxChevronLink } from "./ChevronLink";
import { MoxBox, MoxText } from "../../uiAtoms";

const meta = {
  title: "React/Components/Interactive/ChevronLink",
  component: MoxChevronLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
         <MoxLink href="#" underlineHover="underline">
               <MoxShelf columnGap="sm" alignItems={"start"}>
                 <MoxIcon icon={'ChevronRight'} />
                 {'Link text - usually wrapped in a MoxText '}
               </MoxShelf>
             </MoxLink>
        `),
      },
    },
  },
  decorators: [
    (Story) => (
      <MoxBox
        borderColor="primary-subtle"
        borderWidth="1px"
        borderStyle="dashed"
        padding="md"
        style={{ inlineSize: "300px" }}
      >
        <Story />
      </MoxBox>
    ),
  ],
  args: {
    href: "#",
    children: <MoxText>Click me!</MoxText>,
  },
} satisfies Meta<typeof MoxChevronLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChevronLinkDefault: Story = {
  args: {},
};
