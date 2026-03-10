import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { MoxAtomLink, MoxIcon, MoxShelf } from "../../uiAtoms";

/**
 *
 * @returns a chevron link: a link/button with a chevron in a given direction and position (before/after the text)
 */
export const MoxMoleculeChevronLink = ({
  children,
  linkProps,
  position = "start",
  direction = "forward",
}: {
  children: ReactNode;
  linkProps?: ComponentPropsWithoutRef<typeof MoxAtomLink>;
  position?: "start" | "end";
  direction?: "forward" | "backward";
}) => {
  const iconName = direction === "forward" ? "ChevronRight" : "ChevronLeft";

  return (
    <MoxAtomLink {...linkProps} underlineHover="underline">
      <MoxShelf columnGap="4xs" alignItems={"start"}>
        {position === "start" && <MoxIcon fontSize="xs" icon={iconName} />}
        {children}
        {position === "end" && <MoxIcon fontSize="xs" icon={iconName} />}
      </MoxShelf>
    </MoxAtomLink>
  );
};

export const MoxChevronLink = MoxMoleculeChevronLink;
