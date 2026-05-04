import { MoxStack } from "../../uiAtoms";
import { MoxSideNavLink } from "./SideNavLink";

export type SideNavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
  isCurrent?: boolean;
};

/**
 * Side navigatie component. Een lijst van links die onderling gegroepeerd zijn. Design gebaseerd op MOBu.
 */
export const MoxSideNav = ({
  items,
  ...props
}: {
  items: Array<Array<SideNavItem>>;
} & React.ComponentProps<typeof MoxStack>) => {
  return (
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
  );
};
