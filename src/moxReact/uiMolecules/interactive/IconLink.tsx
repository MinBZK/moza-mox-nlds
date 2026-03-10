import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { MoxAtomLink, MoxShelf } from "../../uiAtoms";

/**
 *
 * @returns an icon link: a link/button with an icon in a given direction and position (before/after the text)
 */
export const MoxMoleculeIconLink = ({
  children,
  linkProps,
  startIconSlot,
  endIconSlot,
}: {
  children: ReactNode;
  linkProps?: ComponentPropsWithoutRef<typeof MoxAtomLink>;
  startIconSlot?: ReactNode;
  endIconSlot?: ReactNode;
}) => {
  return (
    <MoxAtomLink {...linkProps} underlineHover="underline">
      <MoxShelf columnGap="4xs" alignItems={"start"}>
        {startIconSlot}
        {children}
        {endIconSlot}
      </MoxShelf>
    </MoxAtomLink>
  );
};

export const MoxIconLink = MoxMoleculeIconLink;
