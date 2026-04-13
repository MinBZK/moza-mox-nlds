import type { colorOptions } from "../../../moxCss/configOptions";
import { MoxBox, MoxTextBlock } from "../../uiAtoms";

/**
 * Een badge component, bedoeld om een status of categorie aan te geven. Standaard heeft de badge een rode achtergrondkleur (`error`), maar dit kan worden aangepast via de `backgroundColor` prop. De badge heeft een cirkelvormige achtergrond en bevat tekst die standaard in een kleine lettergrootte (`xs`) wordt weergegeven. De tekst heeft geen onderstreping bij hover. De component accepteert ook alle props van `MoxBox`, waardoor je extra styling en functionaliteit kunt toevoegen indien nodig.
 */
export const MoxMoleculeBadge = ({
  children,
  backgroundColor = "neutral",
  ...props
}: {
  children: React.ReactNode;
  backgroundColor?: (typeof colorOptions)[number];
} & React.ComponentProps<typeof MoxBox>) => {
  return (
    <MoxBox
      borderRadius="circle"
      padding="6xs"
      backgroundColor={backgroundColor}
      minInlineSize="md"
      {...props}
    >
      <MoxTextBlock fontSize="xs" underline="none" textAlign="center">
        {children}
      </MoxTextBlock>
    </MoxBox>
  );
};

export const MoxBadge = MoxMoleculeBadge;
