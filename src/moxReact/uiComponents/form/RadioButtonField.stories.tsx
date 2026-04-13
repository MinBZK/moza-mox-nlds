import type { Meta, StoryObj } from "@storybook/react-vite";
import { MoxRadioButtonField } from "./RadioButtonField";
import { getConstructionSummary } from "../../../storybook/helpers/getConstructionSummary";

const meta = {
  title: "React/Components/Form/RadioButtonField",
  component: MoxRadioButtonField,
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
} satisfies Meta<typeof MoxRadioButtonField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonFieldDefault: Story = {
  args: {},
};
