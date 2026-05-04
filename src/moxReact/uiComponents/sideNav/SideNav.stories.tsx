import type { Meta, StoryObj } from "@storybook/react-vite";

import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";
import { MoxSideNav } from "./SideNav";
import { MoxBadge } from "../badge/Badge";
import { MoxIcon } from "../../uiAtoms";

const meta = {
  title: "React/Components/SideNav/SideNav",
  component: MoxSideNav,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
          <MoxStack as="nav" rowGap="md" aria-labelledby="main-menu-title" {...props}>
                {items.map((group, index) => (
                  <MoxStack as="ul" rowGap="6xs" key={index}>
                    {group.map((item) => (
                      <li key={item.href}>
                        <MoxSideNavLink
                          iconSlot={item.icon}
                          badgeSlot={item.badge}
                          disabled={item.disabled}
                          href={item.href}
                          isCurrent={item.isCurrent}
                        >
                          {item.label}
                        </MoxSideNavLink>
                      </li>
                    ))}
                  </MoxStack>
                ))}
              </MoxStack>
        `),
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <style>
          {`
          section { 
            border: 2px dotted orange;
            inline-size: 300px;
            padding: 8px;
          }
        `}
        </style>
        <section>
          <Story />
        </section>
      </div>
    ),
  ],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MoxSideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const mock = [
  [
    {
      label: "Home",
      href: "#",
      isCurrent: true,
      icon: <MoxIcon icon="HouseFill" fontSize="md" />,
      badge: <MoxBadge backgroundColor={"danger"}>3</MoxBadge>,
    },
    {
      label: "Profile",
      href: "#",
      disabled: true,
      icon: <MoxIcon icon="PersonFill" fontSize="md" />,
    },
  ],
  [
    {
      label: "Settings",
      href: "#",
      icon: <MoxIcon icon="GearFill" fontSize="md" />,
    },
    {
      label: "Help",
      href: "#",
      icon: <MoxIcon icon="QuestionCircleFill" fontSize="md" />,
      badge: <MoxBadge backgroundColor={"primary"}>New</MoxBadge>,
    },
  ],
  [
    {
      label: "Logout",
      href: "#",
      icon: <MoxIcon icon="BoxArrowRight" fontSize="md" />,
    },
  ],
];

export const Default: Story = {
  args: { items: mock },
};
