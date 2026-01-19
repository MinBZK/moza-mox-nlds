import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

const gridStyleProps = [
  "gridColumn",
  "gridColumnStart",
  "gridColumnEnd",
] as const satisfies StyleProps;

/**
 * Grid item component.
 * Hiermee kan je een element goed positioneren in zowel een `MoxPageGrid` als een `MoxContainerGrid`.
 *
 * Wanneer je een component in een `MoxPageGrid` plaatst, wordt deze standaard geplaatst in het gebied tussen de gridlijnen `page-start` en `page-end`.
 * Wil je het component anders positioneren, bijvoorbeeld om 3 kolommen naast elkaar te krijgen, of iets dat de ruimte vanaf de zijkant van het venster inneemt, gebruik dan dit component.
 * De reden dat deze eigenschappen niet bruikbaar zijn op het `MoxBox` component is om te voorkomen dat dat component te complex wordt. Dus:
 * - `MoxBox` is voor padding, achtergrondkleuren, borders, etc. Alles wat met de box zelf te maken heeft.
 * - `MoxGridItem` is voor positionering binnen een page-grid.
 *
 * Verantwoordelijkheden
 * 1. Controle over hoe het component binnen de page grid wordt geplaatst.
 *
 * Niet verantwoordelijk voor:
 * 1. Padding, achtergrondkleuren, borders, etc (gebruik een `MoxBox` binnenin als je die nodig hebt).
 */
export const MoxAtomGridItem = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof gridStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    gridStyleProps,
    props
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-atom-grid-item", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxGridItem = MoxAtomGridItem;
