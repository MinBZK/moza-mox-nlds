import { MoxStack } from "../../uiAtoms";
import { MoxSideNavLink } from "./SideNavLink";

export type SideNavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: React.ReactNode;
  isCurrent?: boolean;
};

export const MoxOrganismSideNav = ({
  items,
  ...props
}: {
  items: Array<Array<SideNavItem>>;
} & React.ComponentProps<typeof MoxStack>) => {
  return (
    <MoxStack as="nav" rowGap="xs" aria-labelledby="main-menu-title" {...props}>
      {items.map((group, index) => (
        <MoxStack as="ul" rowGap="0" key={index}>
          {group.map((item) => (
            <li key={item.href}>
              <MoxSideNavLink
                iconSlot={item.icon}
                badgeSlot={item.badge}
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
  );
};

export const MoxSideNav = MoxOrganismSideNav;
