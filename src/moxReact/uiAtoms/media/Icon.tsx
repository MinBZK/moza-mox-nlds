import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";
import * as icons from "react-bootstrap-icons";

export const iconStyleProps = [
  "fontSize", // todo: check if this is easier to use 'size' - but to use it like a iconFont for css, the fontSize is needed and it works for React components as well
  "color",
  "colorHover",
  "flex",
] as const satisfies StyleProps;

/**
 * Icon component
 *
 * Responsibilities
 * 1. Show an icon, based on a predefined list, easy to use with the name of the icon.
 */
export const MoxAtomIcon = <T extends ElementType = "div">({
  children,
  // as, // Not possible right now with BS-icons
  className,
  ref,
  icon,
  ...props
}: AtomProps<T, typeof iconStyleProps> & {
  icon: keyof typeof icons;
}) => {
  const BootstrapIcon = icons[icon];

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    iconStyleProps,
    props,
  );

  return (
    <BootstrapIcon
      ref={ref}
      className={clsx("mox-icon", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </BootstrapIcon>
  );
};

// Easier imports for often used Atom components
export const MoxIcon = MoxAtomIcon;
