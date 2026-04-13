import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { MoxAtomLink, MoxOccupy, MoxShelf } from "../../uiAtoms";

/**
 *
 * @returns an icon link: a link/button with an icon in a given direction and position (before/after the text)
 */
export const MoxIconLink = ({
  children,
  startIconSlot,
  endIconSlot,
  ...props
}: {
  startIconSlot?: ReactNode;
  endIconSlot?: ReactNode;
} & ComponentPropsWithoutRef<typeof MoxAtomLink>) => {
  return (
    <MoxAtomLink {...props} underlineHover="underline">
      <MoxShelf columnGap="4xs" alignItems={"start"}>
        <MoxOccupy size="xs">{startIconSlot}</MoxOccupy>
        {children}
        <MoxOccupy size="xs">{endIconSlot}</MoxOccupy>
      </MoxShelf>
    </MoxAtomLink>
  );
};
