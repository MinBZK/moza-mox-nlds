import clsx from "clsx";
import type { AtomProps, StyleProps } from "../AtomTypes";
import type { ElementType } from "react";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const occupyStyleProps = [
  "alignContent",
  "justifyContent",
  "size",
  "inlineSize",
  "blockSize",
  "flex",
] as const satisfies StyleProps;

/**
 * Occupy is a like a box which can occupy space in a layout. Easy to use for grid-positioning. Be sure to define a size, and the position of the elements in it with align-items and justify-content.
 */
export const MoxAtomOccupy = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof occupyStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    occupyStyleProps,
    props,
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-occupy", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export const MoxOccupy = MoxAtomOccupy;
