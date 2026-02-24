import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const imageStyleProps = [
  "size",
  "blockSize",
  "inlineSize",
] as const satisfies StyleProps;

/**
 * Image component;
 *
 * Responsibilities
 * 1. Wrapper for image content, to apply consistent styling (e.g. color, size) across all image elements in the app.
 */
export const MoxAtomImage = <T extends ElementType = "img">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof imageStyleProps>) => {
  const Component = as || ("img" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    imageStyleProps,
    props,
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-image", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxImage = MoxAtomImage;
