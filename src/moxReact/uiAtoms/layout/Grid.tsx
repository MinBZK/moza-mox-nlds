import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const gridStyleProps = [
  "alignItems",
  "justifyContent",
  "gap",
  "rowGap",
  "columnGap",
  "gridTemplateColumns",
  "gridTemplateRows",
] as const satisfies StyleProps;

/**
 * Grid component;
 *
 * Verantwoordelijkheden
 * 1. Mogelijkheid om een simpel grid te maken, met enkele simpele opties voor `grid-template-columns` en `grid-template-rows`.
 *
 * Buiten scope:
 * 1. Hele uitgebreide grid-opties (zoals `grid-areas`). Gebruik hiervoor een custom grid in CSS.
 */
export const MoxAtomGrid = <T extends ElementType = "div">({
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
    props,
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-grid", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxGrid = MoxAtomGrid;
