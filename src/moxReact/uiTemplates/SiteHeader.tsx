import React from "react";
import { MoxBox, MoxPageGrid } from "../uiAtoms";
import { MoxGridItem } from "../uiAtoms/layout/GridItem";
import { MoxImage } from "../uiAtoms/media/Image";
import rijkslint from "../../../public/logo-rijksoverheid.svg";
import { MoxGrid } from "../uiAtoms/layout/Grid";

/**
 * Template voor de site-header: een grid met in het midden het rijkslint.
 */
export const MoxTemplateSiteHeader = ({
  pageStartSlot,
  lintEndSlot,
  LogoImageWrapper,
}: {
  pageStartSlot?: React.ReactNode;
  lintEndSlot?: React.ReactNode;
  LogoImageWrapper?: React.ComponentType<{ children: React.ReactNode }>;
}) => {
  const logoImage = (
    <MoxImage
      src={rijkslint}
      alt="Rijkslint"
      className="mox-site-header-logo-rijksoverheid mox-alignSelf-start"
    />
  );
  const logoImageSlot =
    LogoImageWrapper == null ? (
      logoImage
    ) : (
      <LogoImageWrapper children={logoImage} />
    );

  return (
    <MoxPageGrid>
      <MoxGridItem gridColumn={"page"}>
        <MoxBox paddingBlockEnd="md">
          <MoxGrid
            gridTemplateColumns={{
              mobileMin: "1fr auto 1fr",
              mobileMax: "1fr",
            }}
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
              {pageStartSlot}
            </MoxBox>
            <MoxBox
              justifySelf="center"
              order={{ mobileMin: "auto", mobileMax: "0" }}
            >
              {logoImageSlot}
            </MoxBox>
            <MoxBox
              order={{ mobileMin: "auto", mobileMax: "2" }}
              justifySelf={{ mobileMin: "start", mobileMax: "center" }}
              display={{
                mobileMax: lintEndSlot != null ? "block" : "contents",
              }}
            >
              {lintEndSlot}
            </MoxBox>
          </MoxGrid>
        </MoxBox>
      </MoxGridItem>
    </MoxPageGrid>
  );
};

export const MoxSiteHeader = MoxTemplateSiteHeader;
