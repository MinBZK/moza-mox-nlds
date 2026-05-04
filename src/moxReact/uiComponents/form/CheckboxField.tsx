import { useId } from "react";
import { MoxAtomCheckbox } from "../../uiAtoms/form/Checkbox";
import { MoxShelf } from "../../uiAtoms/layout/Shelf";
import { MoxText } from "../../uiAtoms/typography/Text";

/**
 * Checkbox component with a label.
 *
 * If you want a component with an error-message and explanation options, use the Organism `MoxCheckboxField`.
 *
 * Responsibilities:
 * 1. Render a checkbox with a label.
 */
export const MoxCheckboxField = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const id = useId();

  return (
    <MoxShelf gap="md" alignItems={"start"} className={className}>
      <MoxAtomCheckbox id={id} />
      <MoxText as="label" htmlFor={id}>
        {children}
      </MoxText>
    </MoxShelf>
  );
};
