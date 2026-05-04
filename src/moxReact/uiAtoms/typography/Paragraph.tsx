import { MoxText, textStyleProps } from "./Text";
import type { AtomProps } from "../AtomTypes";

/**
 * A `MoxAtomText`, rendered as a `<p>` and with the regular (`md`) font-size.
 */
export const MoxAtomParagraph = (
  props: AtomProps<"p", typeof textStyleProps>,
) => {
  return <MoxText block as="p" fontSize="md" {...props} />;
};

export const MoxParagraph = MoxAtomParagraph;
