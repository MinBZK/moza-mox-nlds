import type { Meta, StoryObj } from "@storybook/react-vite";

import { getStylePropArgTypes } from "../../../storybook/helpers/getStylePropArgTypes";
import { imageStyleProps, MoxAtomImage } from "./Image";
import rijkslint from "../../../../public/logo-rijksoverheid.svg";

const meta = {
  title: "React/Atoms/Media/Image",
  component: MoxAtomImage,
  tags: ["autodocs"],
  parameters: {},
  argTypes: {
    children: { table: { disable: true } },
    ...getStylePropArgTypes(imageStyleProps),
  },
} satisfies Meta<typeof MoxAtomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: rijkslint,
    alt: "Rijkslint",
  },
};

const CustomImageComponent = (props: React.ComponentPropsWithoutRef<"img">) => {
  return <img {...props} style={{ border: "2px solid red", ...props.style }} />;
};

export const AsCustomImageComponent: Story = {
  args: {
    as: CustomImageComponent,
    src: rijkslint,
    alt: "Rijkslint",
  },
  parameters: {
    docs: {
      description: {
        story: `Je kan via de 'as' prop een ander element dan 'img' gebruiken. Dit is handig voor als je bijvoorbeeld met NextJS werkt, wat een eigen \`Image\` component heeft. Hier simuleren we een custom \`Image\` component dat een rode border heeft:
\`\`\`tsx
const CustomImageComponent = (props: React.ComponentPropsWithoutRef<"img">) => {
  return <img {...props} style={{ border: "2px solid red", ...props.style }} />;
};

<MoxImage as={CustomImageComponent} src={rijkslint} alt="Rijkslint" />
\`\`\`

Let trouwens op bij NextJS: een image zonder \`src\` zal een error gooien, dus zorg voor een \`ErrorBoundary\` of andere checks zodra je andere componenten meegeeft als \`as\` prop.
          `,
      },
    },
  },
};
