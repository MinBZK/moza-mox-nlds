import type { Meta, StoryObj } from "@storybook/react-vite";

import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";
import { MoxMoleculeChevronLink } from "./ChevronLink";
import { MoxTextBlock } from "../../uiAtoms";

const meta = {
  title: "React/Molecules/Interactive/ChevronLink",
  component: MoxMoleculeChevronLink,
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
  args: {
    href: "#",
    children: <MoxTextBlock>Click me!</MoxTextBlock>,
  },
} satisfies Meta<typeof MoxMoleculeChevronLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChevronLinkDefault: Story = {
  args: {},
};
