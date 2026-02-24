import type { Meta, StoryObj } from "@storybook/react-vite";
import { MoxMoleculeRadioButtonField } from "./RadioButtonField";
import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";

const meta = {
  title: "React/Molecules/Form/RadioButtonField",
  component: MoxMoleculeRadioButtonField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`
                  <MoxAtomShelf>
                    <MoxAtomRadioButton id={id} />
                    <MoxTextBlock as="label" htmlFor={id}>{children}</MoxTextBlock>
                  </MoxAtomShelf>
                `),
      },
    },
  },
  args: {
    children: "Click me!",
  },
} satisfies Meta<typeof MoxMoleculeRadioButtonField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonFieldDefault: Story = {
  args: {},
};
