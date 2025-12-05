/**
 * Box component;
 *
 * Responsibilities
 * 1. Serve as a container for layout purposes.
 * 2. Provide padding, border and background options.
 * 3. align-self, justify-self, place-self support via className prop.
 *
 * Not responsible for:
 * 1. Any alignment or distribution of child elements (use `Shelf`, `Stack`, or any other layout component for that).
 * 2. Managing state or behavior beyond layout concerns (Atoms never do).
 */

import clsx from "clsx";
import React, {
  type ReactNode,
  type ComponentPropsWithoutRef,
  type ElementType,
  useEffect,
} from "react";

type BoxProps<T extends ElementType = "div"> = {
  children?: ReactNode;
  className?: string;
  as?: T;
} & ComponentPropsWithoutRef<T>;

// Components are always named exported with `Mox` and `level (Atom, Molecule, etc)` prefix
export const MoxAtomBox = <T extends ElementType = "div">(
  props: BoxProps<T> & { ref?: React.Ref<unknown> }
) => {
  const { children, as, className, ref, ...restProps } = props;
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const propClassNames: Array<string> = [];

  return (
    <Component
      ref={ref}
      className={clsx(
        "some-class",
        "another-one",
        ...propClassNames,
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for heavily used Atom components
export const MoxBox = MoxAtomBox;
