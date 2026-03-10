import type { ComponentPropsWithoutRef } from "react";
import { MoxAtomLink, MoxIcon, MoxShelf } from "../../uiAtoms";

/**
 *
 * @returns a chevron link: a link/button with a chevron in a given direction and position (before/after the text)
 */
export const MoxMoleculeChevronLink = ({
  children,
  position = "start",
  direction = "forward",
  ...props
}: {
  position?: "start" | "end";
  direction?: "forward" | "backward";
} & ComponentPropsWithoutRef<typeof MoxAtomLink>) => {
  const iconName = direction === "forward" ? "ChevronRight" : "ChevronLeft";

  return (
    <MoxAtomLink {...props} underlineHover="underline">
      <MoxShelf columnGap="4xs" alignItems={"start"}>
        {position === "start" && (
          <MoxIcon flex="1 0 auto" fontSize="xs" icon={iconName} />
        )}
        {children}
        {position === "end" && (
          <MoxIcon flex="1 0 auto" fontSize="xs" icon={iconName} />
        )}
      </MoxShelf>
    </MoxAtomLink>
  );
};

export const MoxChevronLink = MoxMoleculeChevronLink;
