import{j as o}from"./iframe-B3yi9PtC.js";import{M as a,p as n}from"./PageGrid-BzwMyR28.js";import{M as t}from"./Box-DL1lCic8.js";import{g as d}from"./getStylePropArgTypes-Cpudgmod.js";import{M as s}from"./GridItem-CYGokpcm.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CaYXZ-nc.js";import"./mox.config-BjroUyw3.js";const M={title:"React/Atoms/Layout/PageGrid",component:a,tags:["autodocs"],parameters:{layout:"fullscreen",viewport:{defaultViewport:"tablet"},docs:{description:{story:"Bekijk deze pagina full-screen voor een beter beeld hoe het grid werkt en de zijkanten op laat schalen."}}},args:{},argTypes:{children:{table:{disable:!0}},...d(n)}},r={args:{children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})}},e={args:{children:o.jsx(s,{gridColumnStart:"windowStart",children:o.jsx(t,{backgroundColor:"primary-subtle",padding:"md",children:"Page Grid Content"})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxBox backgroundColor={"primary-subtle"} padding="md">
        {"Page Grid Content"}
      </MoxBox>
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <MoxGridItem gridColumnStart={"windowStart"}>
        <MoxBox backgroundColor={"primary-subtle"} padding="md">
          {"Page Grid Content"}
        </MoxBox>
      </MoxGridItem>
  }
}`,...e.parameters?.docs?.source}}};const f=["Default","FromWindowStart"];export{r as Default,e as FromWindowStart,f as __namedExportsOrder,M as default};
