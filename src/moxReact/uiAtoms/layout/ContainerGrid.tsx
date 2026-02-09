import clsx from "clsx";
import { type ElementType } from "react";
import type { AtomProps, StyleProps } from "../AtomTypes";
import { propsToClassNames } from "../../helpers/propsToClassNames";

export const containerGridStyleProps = [
  "itemSize",
] as const satisfies StyleProps;

/**
 * Container grid component.
 * Werkt zoals de page-grid, maar dit wordt gebruikt om een pagina handig in responsive `columns` te splitsen.
 * Wezenlijk verschil met de page-grid is dat dit niet de zijruimte van de pagina corrigeert; deze grid vult altijd de complete ruimte op.
 * Verder baseert de container-grid zijn breakpoints op @container-queries. Een page-grid gebruikt @media queries.
 * Ook is dit een grid wat beter geschikt is voor herhalende content, zoals Cards, die mogelijk moeten 'wrappen' op een nieuwe regel.
 *
 * Een page-grid zet een container-type, dus als je dit grid gebruikt binnen een page-grid gebruikt hij dat als referentie voor de container-grootte.
 *
 * Gebruikt de property `itemSize` om te bepalen welke verdeling van de beschikbare kolommen (12 bij een desktop scherm) je wilt.
 *
 * Verantwoordelijkheden:
 * 1. Verdeel de beschikbare ruimte in kolommen, afhankelijk van de container-grootte.
 */
export const MoxAtomContainerGrid = <T extends ElementType = "div">({
  children,
  as,
  className,
  ref,
  ...props
}: AtomProps<T, typeof containerGridStyleProps>) => {
  const Component = as || ("div" as ElementType);

  // convert props into correct classnames
  const { stylePropClassNames, restProps } = propsToClassNames(
    containerGridStyleProps,
    props
  );

  return (
    <Component
      ref={ref}
      className={clsx("mox-container-grid", ...stylePropClassNames, className)}
      {...restProps}
    >
      {children}
    </Component>
  );
};

// Easier imports for often used Atom components
export const MoxContainerGrid = MoxAtomContainerGrid;
