import type { ComponentPropsWithoutRef } from "react";
import {
  MoxAtomLink,
  MoxBox,
  MoxOccupy,
  MoxShelf,
  MoxText,
} from "../../uiAtoms";

const SideNavLinkContent = ({
  iconSlot,
  children,
  badgeSlot,
}: {
  children: React.ReactNode;
  iconSlot: React.ReactNode;
  badgeSlot?: React.ReactNode;
}) => {
  return (
    <MoxShelf columnGap="xl" alignItems={"start"}>
      <MoxOccupy
        blockSize="xs"
        inlineSize="md"
        alignContent={"center"}
        justifyContent={"center"}
      >
        {iconSlot}
      </MoxOccupy>
      <MoxShelf
        columnGap="sm"
        alignItems={"start"}
        justifyContent={"spaceBetween"}
        flex="1 0 auto"
      >
        <MoxText block fontSize="lg">
          {children}
        </MoxText>
        <MoxOccupy
          blockSize="xs"
          inlineSize="auto"
          alignContent={"center"}
          justifyContent={"center"}
        >
          {badgeSlot}
        </MoxOccupy>
      </MoxShelf>
    </MoxShelf>
  );
};

/**
 * Side-navigation button, designed after MOBu. A link that has a hover-background and an 'isCurrent' state. It could also be disabled to prevent any interaction.
 */
export const MoxSideNavLink = ({
  iconSlot,
  children,
  badgeSlot,
  isCurrent = false,
  disabled = false,
  ...props
}: {
  iconSlot: React.ReactNode;
  badgeSlot?: React.ReactNode;
  isCurrent?: boolean;
  disabled?: boolean;
} & ComponentPropsWithoutRef<typeof MoxAtomLink>) => {
  if (disabled === true)
    return (
      <MoxBox padding="xs" borderRadius="8px">
        <MoxText color="neutral">
          <SideNavLinkContent iconSlot={iconSlot} badgeSlot={badgeSlot}>
            {children}
          </SideNavLinkContent>
        </MoxText>
      </MoxBox>
    );
  return (
    <MoxAtomLink {...props} color={isCurrent ? "primary" : "plain"}>
      <MoxBox
        backgroundColor={isCurrent ? "primary-subtle-2" : "transparent"}
        backgroundColorHover={isCurrent ? "primary-subtle-2" : "neutral-subtle"}
        backgroundColorActive={isCurrent ? "primary-subtle-2" : "neutral"}
        padding="xs"
        borderRadius="8px"
      >
        <SideNavLinkContent iconSlot={iconSlot} badgeSlot={badgeSlot}>
          {children}
        </SideNavLinkContent>
      </MoxBox>
    </MoxAtomLink>
  );
};
