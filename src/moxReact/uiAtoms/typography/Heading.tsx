import type { spaces } from "../../../moxCss/configOptions";
import type { AtomProps } from "../AtomTypes";
import { MoxText, textStyleProps } from "./Text";

const levelToSpaceMap: Record<1 | 2 | 3 | 4 | 5 | 6, (typeof spaces)[number]> =
  {
    1: "3xl",
    2: "2xl",
    3: "xl",
    4: "lg",
    5: "md",
    6: "sm",
  };

/**
 * A `MoxAtomText` block, rendered as a `<h1>`, `<h2>`, etc (depending on `level`) and with a larger font-size (overwritable with `sizeLevel`), used for a page heading
 */
export const MoxAtomHeading = ({
  level,
  sizeLevel = level,
  ...props
}: AtomProps<"h1", typeof textStyleProps> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  sizeLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  return (
    <MoxText
      block
      as={`h${level}`}
      fontSize={levelToSpaceMap[sizeLevel]}
      {...props}
    />
  );
};

export const MoxHeading = MoxAtomHeading;
