import type { Meta, StoryObj } from "@storybook/react-vite";

import { MoxTemplateSiteHeader } from "./SiteHeader";
import { getConstructionSummary } from "../../storybook/helpers/getConstructionSummary";
import { MoxStack, MoxTextBlock } from "../uiAtoms";

const meta = {
  title: "React/Templates/SiteHeader",
  component: MoxTemplateSiteHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 170,
      },
      description: {
        component: `Een site-header voor Rijksoverheid websites. Het lint is 48px breed, zoals beschreven in de Rijkshuisstijl.\n\n## Properties:
- \`pageStartSlot\`: voor een (bv) site-titel en tagline aan de linkerzijde van het lint (helemaal links).
- \`lintEndSlot\`: voor een (bv) site-tittel en tagline aan de rechterzijde van het lint.
- \`LogoImageWrapper\`: een optionele wrapper voor de logo afbeelding. Hiermee kan je bijvoorbeeld een link toevoegen aan het logo.
\n\n
Bekijk de full-screen versie door op de rechterbovenknop te klikken: ↗️`,
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof MoxTemplateSiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const siteHeaderStructure = getConstructionSummary(`<MoxPageGrid>
      <MoxGridItem gridColumn={"page"}>
        <MoxBox paddingBlockEnd="md">
        <MoxGrid
          gridTemplateColumns={{ mobileMin: "1fr auto 1fr", mobileMax: "1fr" }}
          justifyContent={{ mobileMax: "center" }}
          alignItems="center"
          gap="2xs"
        >
          <MoxBox
            justifySelf={{ mobileMin: "start", mobileMax: "center" }}
            display={{
              mobileMax: pageStartSlot != null ? "block" : "contents",
            }}
            order={{ mobileMin: "auto", mobileMax: "1" }}
          >
            {/* Your site title and tagline here */}
          </MoxBox>
          <MoxBox
            justifySelf="center"
            order={{ mobileMin: "auto", mobileMax: "0" }}
          >
            <a href="#">
              <MoxImage
                src={rijkslint}
                alt="Rijkslint"
                className="mox-page-header-logo-rijksoverheid mox-alignSelf-start"
              />
            </a>
          </MoxBox>
          <MoxBox
            order={{ mobileMin: "auto", mobileMax: "2" }}
            justifySelf={{ mobileMin: "start", mobileMax: "center" }}
            display={{
              mobileMax: lintEndSlot != null ? "block" : "contents",
            }}
          >
            {/* Or here */}
          </MoxBox>
        </MoxGrid>
        </MoxBox>
      </MoxGridItem>
    </MoxPageGrid>`);

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(`<MoxPageGrid>
      <MoxGridItem gridColumn={"page"}>
        <MoxStack alignItems={"center"} justifyContent={"start"}>
          <MoxBox paddingBlockEnd={"md"}> 
          <a href="#"><MoxImage
              src={rijkslint}
              alt="Rijkslint"
              className="mox-page-header-logo-rijksoverheid"
            /></a>
          </MoxBox>
        </MoxStack>
      </MoxGridItem>
    </MoxPageGrid>`),
      },
    },
  },
};

export const PageStartTitleWithLogoLink: Story = {
  args: {
    pageStartSlot: (
      <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
    ),
    LogoImageWrapper: ({ children }: { children: React.ReactNode }) => (
      <a href="#">{children}</a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: siteHeaderStructure,
      },
    },
  },
};

export const LintEndTitle: Story = {
  args: {
    lintEndSlot: (
      <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: siteHeaderStructure,
      },
    },
  },
};

export const twoTitles: Story = {
  args: {
    pageStartSlot: (
      <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
    ),
    lintEndSlot: (
      <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Another Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Another Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: `Dit zou niet moeten voorkomen: kies voor een page-start of lint-end <title className="" />
      \n\n${siteHeaderStructure}`,
      },
    },
  },
};
