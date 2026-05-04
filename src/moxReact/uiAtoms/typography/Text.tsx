import type { ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import clsx from "clsx";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const textStyleProps = [
  "color",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "lineHeight",
  "underline",
  "underlineHover",
  "textAlign",
  "flex",
] as const satisfies StyleProps;

/**
 * A text component to be used for any text content (the actual text might be in one of the children).
 * The `block` prop is a special property that does not exist on other Atoms. When set to true, this component will have it's half-leading on the top/bottom trimmed to fit snugly in designs (e.g. placing it in a `<Shelf>` next to an Icon will align them perfectly at the top). See the orange border on the default component.
 *
 * Responsibilities:
 * 1. Render text content with appropriate semantics (via `as` prop).
 * 2. Apply font-size styling via classNames.
 *
 * Not (yet) responsible for:
 * 1. Managing text-specific behavior (e.g., truncation, wrapping)
 */

export const MoxAtomText = <T extends ElementType = "span">({
  children,
  as,
  className,
  block = false,
  ref,
  ...props
}: AtomProps<T, typeof textStyleProps> & { block?: boolean }) => {
  const Component = as || ("span" as ElementType);
  // convert style props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    textStyleProps,
    props,
  );

  return (
    <Component
      ref={ref}
      {...restProps}
      className={clsx(
        block ? "mox-text-block" : undefined,
        stylePropClassNames,
        className,
      )}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxText = MoxAtomText;
