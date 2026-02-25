import{j as e}from"./iframe-B8frRrKf.js";import{M as a}from"./box-0o5QHxwu.js";import"./Shelf-CBVOCRSo.js";import{M as m}from"./Stack-BkO-co5i.js";import{M as k}from"./PageGrid-BPk0Qgg3.js";import"./Heading-DXcM399Y.js";import{M as t}from"./TextBlock-CNrO7nkW.js";import"./Paragraph-BHi3eN5P.js";import"./PageLead-Chhs2U-o.js";import"./Link-PvsvM3fT.js";import"./Checkbox-ap8etJjr.js";import"./RadioButton-B8o5x-8y.js";import{M as j}from"./GridItem-DDXOfNdC.js";import{a as T,r as y}from"./logo-rijksoverheid-DYGNZtgs.js";import{c as b}from"./clsx-B-dksMZM.js";import{p as B}from"./propsToClassNames-ChSwfNU6.js";import{g}from"./getConstructionSummary-DrEN36m4.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-CFm5mF-x.js";const R=["alignItems","justifyContent","gap","rowGap","columnGap","gridTemplateColumns","gridTemplateRows"],M=({children:o,as:r,className:n,ref:i,...x})=>{const f=r||"div",{stylePropClassNames:S,restProps:h}=B(R,x);return e.jsx(f,{ref:i,className:b("mox-grid",...S,n),...h,children:o})},v=M;M.__docgenInfo={description:"Grid component;\n\nVerantwoordelijkheden\n1. Mogelijkheid om een simpel grid te maken, met enkele simpele opties voor `grid-template-columns` en `grid-template-rows`.\n\nBuiten scope:\n1. Hele uitgebreide grid-opties (zoals `grid-areas`). Gebruik hiervoor een custom grid in CSS.",methods:[],displayName:"MoxAtomGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const u=({pageStartSlot:o,lintEndSlot:r,LogoImageWrapper:n})=>{const i=e.jsx(T,{src:y,alt:"Rijkslint",className:"mox-site-header-logo-rijksoverheid mox-alignSelf-start"}),x=n==null?i:e.jsx(n,{children:i});return e.jsx(k,{children:e.jsx(j,{gridColumn:"page",children:e.jsx(a,{paddingBlockEnd:"md",children:e.jsxs(v,{gridTemplateColumns:{mobileMin:"1fr auto 1fr",mobileMax:"1fr"},justifyContent:{mobileMax:"center"},alignItems:"center",gap:"2xs",children:[e.jsx(a,{justifySelf:{mobileMin:"start",mobileMax:"center"},display:{mobileMax:o!=null?"block":"contents"},order:{mobileMin:"auto",mobileMax:"1"},children:o}),e.jsx(a,{justifySelf:"center",order:{mobileMin:"auto",mobileMax:"0"},children:x}),e.jsx(a,{order:{mobileMin:"auto",mobileMax:"2"},justifySelf:{mobileMin:"start",mobileMax:"center"},display:{mobileMax:r!=null?"block":"contents"},children:r})]})})})})};u.__docgenInfo={description:"Template voor de site-header: een grid met in het midden het rijkslint.",methods:[],displayName:"MoxTemplateSiteHeader",props:{pageStartSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lintEndSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},LogoImageWrapper:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ children: React.ReactNode }>",elements:[{name:"signature",type:"object",raw:"{ children: React.ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},description:""}}};const Y={title:"React/Templates/SiteHeader",component:u,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:170},description:{component:`Een site-header voor Rijksoverheid websites. Het lint is 48px breed, zoals beschreven in de Rijkshuisstijl.

## Properties:
- \`pageStartSlot\`: voor een (bv) site-titel en tagline aan de linkerzijde van het lint (helemaal links).
- \`lintEndSlot\`: voor een (bv) site-tittel en tagline aan de rechterzijde van het lint.
- \`LogoImageWrapper\`: een optionele wrapper voor de logo afbeelding. Hiermee kan je bijvoorbeeld een link toevoegen aan het logo.



Bekijk de full-screen versie door op de rechterbovenknop te klikken: ↗️`}}},argTypes:{}},p=g(`<MoxPageGrid>
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
    </MoxPageGrid>`),s={args:{},parameters:{docs:{description:{story:g(`<MoxPageGrid>
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
    </MoxPageGrid>`)}}}},l={args:{pageStartSlot:e.jsx("a",{href:"#",children:e.jsxs(m,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})}),LogoImageWrapper:({children:o})=>e.jsx("a",{href:"#",children:o})},parameters:{docs:{description:{story:p}}}},c={args:{lintEndSlot:e.jsx("a",{href:"#",children:e.jsxs(m,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})})},parameters:{docs:{description:{story:p}}}},d={args:{pageStartSlot:e.jsx("a",{href:"#",children:e.jsxs(m,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})}),lintEndSlot:e.jsx("a",{href:"#",children:e.jsxs(m,{gap:"xs",children:[e.jsx(t,{children:"Another Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Another Tagline"})]})})},parameters:{docs:{description:{story:`Dit zou niet moeten voorkomen: kies voor een page-start of lint-end <title className="" />
      

${p}`}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(\`<MoxPageGrid>
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
    </MoxPageGrid>\`)
      }
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    pageStartSlot: <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>,
    LogoImageWrapper: ({
      children
    }: {
      children: React.ReactNode;
    }) => <a href="#">{children}</a>
  },
  parameters: {
    docs: {
      description: {
        story: siteHeaderStructure
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    lintEndSlot: <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
  },
  parameters: {
    docs: {
      description: {
        story: siteHeaderStructure
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pageStartSlot: <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>,
    lintEndSlot: <a href="#">
        <MoxStack gap="xs">
          <MoxTextBlock>{"Another Site title"}</MoxTextBlock>
          <MoxTextBlock fontSize="sm" fontStyle="italic">
            {"Another Tagline"}
          </MoxTextBlock>
        </MoxStack>
      </a>
  },
  parameters: {
    docs: {
      description: {
        story: \`Dit zou niet moeten voorkomen: kies voor een page-start of lint-end <title className="" />
      \\n\\n\${siteHeaderStructure}\`
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const J=["Default","PageStartTitleWithLogoLink","LintEndTitle","twoTitles"];export{s as Default,c as LintEndTitle,l as PageStartTitleWithLogoLink,J as __namedExportsOrder,Y as default,d as twoTitles};
