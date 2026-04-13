import type { ComponentPropsWithoutRef } from "react";
import {
  MoxAtomLink,
  MoxBox,
  MoxOccupy,
  MoxShelf,
  MoxTextBlock,
} from "../../uiAtoms";

/**
 * Side-navigation button, designed after MOBu. A link that has a hover-background and an 'isCurrent' state. It could also be disabled to prevent any interaction.
 */
export const MoxSideNavLink = ({
  iconSlot,
  children,
  badgeSlot,
  isCurrent,
  ...props
}: {
  iconSlot: React.ReactNode;
  badgeSlot?: React.ReactNode;
  isCurrent?: boolean;
} & ComponentPropsWithoutRef<typeof MoxAtomLink>) => {
  return (
    <MoxAtomLink {...props} color={isCurrent ? "primary" : "plain"}>
      <MoxBox
        backgroundColor={isCurrent ? "primary-subtle-2" : "transparent"}
        backgroundColorHover={isCurrent ? "primary-subtle-2" : "neutral-subtle"}
        backgroundColorActive={isCurrent ? "primary-subtle-2" : "neutral"}
        padding="xs"
        borderRadius="8px"
      >
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
            <MoxTextBlock
              fontSize="lg"
              fontWeight={isCurrent ? "bold" : "normal"}
            >
              {children}
            </MoxTextBlock>
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
      </MoxBox>
    </MoxAtomLink>
  );
};
