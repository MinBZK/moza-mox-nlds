import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const svgStyleProps = [
  "size",
  "color",
  "colorHover",
] as const satisfies StyleProps;

/**
 * Svg component;
 *
 * Responsibilities
 * 1. Wrapper for svg content, to apply consistent styling (e.g. color, size) across all svg icons and illustrations in the app.
 */
export const MoxAtomSvg = <T extends ElementType = "svg">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof svgStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    svgStyleProps,
    props,
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-svg", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxSvg = MoxAtomSvg;
