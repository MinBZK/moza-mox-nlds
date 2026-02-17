import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const iconStyleProps = [
  "fontSize",
  "color",
  "colorHover",
] as const satisfies StyleProps;

/**
 * Icon component
 *
 * Responsibilities
 * 1. Show an icon, based on a predefined list, easy to use with the name of the icon.
 */
export const MoxAtomIcon = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof iconStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    iconStyleProps,
    props,
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-icon", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxIcon = MoxAtomIcon;
