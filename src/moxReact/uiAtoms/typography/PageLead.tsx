import type { AtomProps } from "../AtomTypes";
import { MoxText, textStyleProps } from "./Text";

/**
 * A `MoxAtomText`, rendered as a `<p>` and with the larger (`lg`) font-size, used for an introduction/lead of a page
 */
export const MoxAtomPageLead = (
  props: AtomProps<"p", typeof textStyleProps>,
) => {
  return <MoxText block as="p" fontSize="lg" {...props} />;
};

export const MoxPageLead = MoxAtomPageLead;
