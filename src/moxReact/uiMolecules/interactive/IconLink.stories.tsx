import type { Meta, StoryObj } from "@storybook/react-vite";

import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";
import { MoxBox, MoxIcon, MoxTextBlock } from "../../uiAtoms";
import { MoxMoleculeIconLink } from "./IconLink";

const meta = {
  title: "React/Molecules/Interactive/IconLink",
  component: MoxMoleculeIconLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
         <MoxLink href="#" underlineHover="underline">
               <MoxShelf columnGap="sm" alignItems={"start"}>
                 <MoxIcon icon={'ChevronRight'} />
                 {'Link text - usually wrapped in a MoxTextBlock '}
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
    children: <MoxTextBlock>Click me!</MoxTextBlock>,
    startIconSlot: <MoxIcon icon="Search" fontSize="xs" />,
  },
} satisfies Meta<typeof MoxMoleculeIconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconLinkDefault: Story = {
  args: {},
};

export const IconLinkRandomIcon: Story = {
  args: {
    startIconSlot: <MoxTextBlock>👻</MoxTextBlock>,
  },
};
