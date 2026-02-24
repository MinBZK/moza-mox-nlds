import{j as e}from"./iframe-BTu9IaQJ.js";import{M as n}from"./box-DeYAzi_E.js";import"./Shelf-B-9Jh5LN.js";import{M as c}from"./Stack-B_Z_bW6t.js";import{M as h}from"./PageGrid-Cy1qwyol.js";import"./Heading-LFnDdpbn.js";import{M as t}from"./TextBlock-DAaMrhIC.js";import"./Paragraph-BBbjFePX.js";import"./PageLead-QduAZ2Ue.js";import"./Link-eZf7iiAI.js";import"./Checkbox-CswodAoI.js";import"./RadioButton-CQq9_kOU.js";import{M as j}from"./GridItem-BvV0bv6t.js";import{a as T,r as y}from"./logo-rijksoverheid-C0ERlDxW.js";import{c as b}from"./clsx-B-dksMZM.js";import{p as B}from"./propsToClassNames-ChSwfNU6.js";import{g as d}from"./getConstructionSummary-DrEN36m4.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-CFm5mF-x.js";const G=["alignItems","justifyContent","gap","rowGap","columnGap","gridTemplateColumns","gridTemplateRows"],x=({children:o,as:r,className:g,ref:M,...u})=>{const f=r||"div",{stylePropClassNames:S,restProps:k}=B(G,u);return e.jsx(f,{ref:M,className:b("mox-grid",...S,g),...k,children:o})},R=x;x.__docgenInfo={description:"Grid component;\n\nVerantwoordelijkheden\n1. Mogelijkheid om een simpel grid te maken, met enkele simpele opties voor `grid-template-columns` en `grid-template-rows`.\n\nBuiten scope:\n1. Hele uitgebreide grid-opties (zoals `grid-areas`). Gebruik hiervoor een custom grid in CSS.",methods:[],displayName:"MoxAtomGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};const p=({pageStartSlot:o,lintEndSlot:r})=>(console.log(o),e.jsx(h,{children:e.jsx(j,{gridColumn:"page",children:e.jsx(n,{paddingBlockEnd:"md",children:e.jsxs(R,{gridTemplateColumns:{mobileMin:"1fr auto 1fr",mobileMax:"1fr"},justifyContent:{mobileMax:"center"},alignItems:"center",gap:"2xs",children:[e.jsx(n,{justifySelf:{mobileMin:"start",mobileMax:"center"},display:{mobileMax:o!=null?"block":"contents"},order:{mobileMin:"auto",mobileMax:"1"},children:o}),e.jsx(n,{justifySelf:"center",order:{mobileMin:"auto",mobileMax:"0"},children:e.jsx(T,{src:y,alt:"Rijkslint",className:"mox-page-header-logo-rijksoverheid mox-alignSelf-start"})}),e.jsx(n,{order:{mobileMin:"auto",mobileMax:"2"},justifySelf:{mobileMin:"start",mobileMax:"center"},display:{mobileMax:r!=null?"block":"contents"},children:r})]})})})}));p.__docgenInfo={description:"Template voor de page-header: een grid met in het midden het rijkslint.",methods:[],displayName:"MoxTemplatePageHeader",props:{pageStartSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lintEndSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J={title:"React/Templates/PageHeader",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:170},description:{component:`Een page-header voor Rijksoverheid websites. Het lint is 48px breed, zoals beschreven in de Rijkshuisstijl.

Bekijk de full-screen versie door op de rechterbovenknop te klikken: ↗️`}}},argTypes:{}},m=d(`<MoxPageGrid>
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
            <MoxImage
              src={rijkslint}
              alt="Rijkslint"
              className="mox-page-header-logo-rijksoverheid mox-alignSelf-start"
            />
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
    </MoxPageGrid>`),i={args:{},parameters:{docs:{description:{story:d(`<MoxPageGrid>
      <MoxGridItem gridColumn={"page"}>
        <MoxStack alignItems={"center"} justifyContent={"start"}>
          <MoxBox paddingBlockEnd={"md"}> <MoxImage
              src={rijkslint}
              alt="Rijkslint"
              className="mox-page-header-logo-rijksoverheid"
            />
          </MoxBox>
        </MoxStack>
      </MoxGridItem>
    </MoxPageGrid>`)}}}},a={args:{pageStartSlot:e.jsx("a",{href:"#",children:e.jsxs(c,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})})},parameters:{docs:{description:{story:m}}}},s={args:{lintEndSlot:e.jsx("a",{href:"#",children:e.jsxs(c,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})})},parameters:{docs:{description:{story:m}}}},l={args:{pageStartSlot:e.jsx("a",{href:"#",children:e.jsxs(c,{gap:"xs",children:[e.jsx(t,{children:"Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Tagline"})]})}),lintEndSlot:e.jsx("a",{href:"#",children:e.jsxs(c,{gap:"xs",children:[e.jsx(t,{children:"Another Site title"}),e.jsx(t,{fontSize:"sm",fontStyle:"italic",children:"Another Tagline"})]})})},parameters:{docs:{description:{story:`Dit zou niet moeten voorkomen: kies voor een page-start of lint-end <title className="" />
      

${m}`}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  parameters: {
    docs: {
      description: {
        story: getConstructionSummary(\`<MoxPageGrid>
      <MoxGridItem gridColumn={"page"}>
        <MoxStack alignItems={"center"} justifyContent={"start"}>
          <MoxBox paddingBlockEnd={"md"}> <MoxImage
              src={rijkslint}
              alt="Rijkslint"
              className="mox-page-header-logo-rijksoverheid"
            />
          </MoxBox>
        </MoxStack>
      </MoxGridItem>
    </MoxPageGrid>\`)
      }
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    pageStartSlot: <a href="#">
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
        story: pageHeaderStructure
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
        story: pageHeaderStructure
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
      \\n\\n\${pageHeaderStructure}\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const K=["Default","PageStartTitle","LintEndTitle","twoTitles"];export{i as Default,s as LintEndTitle,a as PageStartTitle,K as __namedExportsOrder,J as default,l as twoTitles};
