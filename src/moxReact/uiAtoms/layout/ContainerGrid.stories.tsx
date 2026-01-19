import type { Meta, StoryObj } from "@storybook/react-vite";

import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { containerGridStyleProps, MoxAtomContainerGrid } from "./ContainerGrid";
import { MoxBox } from "./Box";
import { MoxGridItem } from "./GridItem";

const meta = {
  title: "React/Atoms/Layout/ContainerGrid",
  component: MoxAtomContainerGrid,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(containerGridStyleProps),
  },
  decorators: [
    (Story) => (
      <div style={{ containerType: "inline-size" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MoxAtomContainerGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Half: Story = {
  args: {
    itemSize: "half",
    children: (
      <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
      </>
    ),
  },
};

export const Third: Story = {
  args: {
    itemSize: "third",
    children: (
      <>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
        <MoxBox backgroundColor="success-subtle" padding="md">
          {"third"}
        </MoxBox>
      </>
    ),
  },
};

export const Quarter: Story = {
  args: {
    itemSize: "quarter",
    children: (
      <>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
        <MoxBox backgroundColor="primary-subtle" padding="md">
          {"quarter"}
        </MoxBox>
      </>
    ),
  },
};

export const Sixth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Je kan een `gridItem` gebruiken om meerdere kolommen te beslaan.",
      },
    },
  },
  args: {
    itemSize: "sixth",
    children: (
      <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"sixth"}
        </MoxBox>
        <MoxGridItem gridColumn={"span2"}>
          <MoxBox backgroundColor="secondary-subtle-2" padding="md">
            {"sixth (with span 2)"}
          </MoxBox>
        </MoxGridItem>
      </>
    ),
  },
};
