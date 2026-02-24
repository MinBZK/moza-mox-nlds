import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxMoleculeCheckboxField } from "./CheckboxField";
import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";

const meta = {
  title: "React/Molecules/Form/CheckboxField",
  component: MoxMoleculeCheckboxField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
          <MoxAtomShelf>
            <MoxAtomCheckbox id={id} />
            <MoxTextBlock as="label" htmlFor={id}>{children}</MoxTextBlock>
          </MoxAtomShelf>
        `),
      },
    },
  },
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof MoxMoleculeCheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxFieldDefault: Story = {
  args: {},
};
