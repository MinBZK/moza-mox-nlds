import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxCheckboxField } from "./CheckboxField";
import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";

const meta = {
  title: "React/Components/Form/CheckboxField",
  component: MoxCheckboxField,
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
} satisfies Meta<typeof MoxCheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxFieldDefault: Story = {
  args: {},
};
