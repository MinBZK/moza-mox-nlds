import type { Meta, StoryObj } from "@storybook/react-vite";

import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";
import { MoxOrganismSideNavLink } from "./SideNavLink";
import { MoxIcon } from "../../uiAtoms";
import { MoxBadge } from "../badge/Badge";

const meta = {
  title: "React/Components/SideNav/SideNavLink",
  component: MoxOrganismSideNavLink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
          <MoxAtomLink {...props} color={isCurrent ? "primary" : "plain"}>
                <MoxBox
                  backgroundColor={isCurrent ? "primary-subtle-2" : "transparent"}
                  backgroundColorHover={
                    isCurrent ? "primary-subtle-2" : "neutral-subtle-2"
                  }
                  backgroundColorActive={
                    isCurrent ? "primary-subtle-2" : "neutral-subtle"
                  }
                  padding="xs"
                  borderRadius="8px"
                >
                  <MoxShelf columnGap="xs" alignItems={"start"}>
                    <MoxOccupy
                      blockSize="xs"
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      {iconSlot}
                    </MoxOccupy>
                    <MoxShelf
                      columnGap="xs"
                      alignItems={"start"}
                      justifyContent={"spaceBetween"}
                    >
                      <MoxTextBlock fontWeight={isCurrent ? "bold" : "normal"}>
                        {children}
                      </MoxTextBlock>
                      <MoxOccupy
                        blockSize="xs"
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        {badgeSlot}
                      </MoxOccupy>
                    </MoxShelf>
                  </MoxShelf>
                </MoxBox>
              </MoxAtomLink>
        `),
      },
    },
  },
  argTypes: {},
  args: {
    children: "Home",
    iconSlot: <MoxIcon icon="HouseFill" fontSize="md" />,
    badgeSlot: <MoxBadge backgroundColor={"danger"}>3</MoxBadge>,
  },
} satisfies Meta<typeof MoxOrganismSideNavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isCurrent: false },
};

export const IsCurrent: Story = {
  args: { isCurrent: true },
};
