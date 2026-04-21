import{j as r}from"./iframe-B2AZB9RS.js";import{g as t}from"./getStylePropArgTypes-N8gvkMTA.js";import{M as c,c as l}from"./ContainerGrid-CFby2l1f.js";import{M as o}from"./Box-BaR_jUA8.js";import{M as m}from"./GridItem-BfT0tAcu.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-C5hDLZc_.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const C={title:"React/Atoms/Layout/ContainerGrid",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{gap:"md"},argTypes:{children:{table:{disable:!0}},...t(l)},decorators:[i=>r.jsx("div",{style:{containerType:"inline-size"},children:r.jsx(i,{})})]},n={args:{itemSize:"full",children:r.jsx(r.Fragment,{children:r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"full"})})}},e={args:{itemSize:"half",children:r.jsxs(r.Fragment,{children:[r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"half"}),r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"half"})]})}},d={args:{itemSize:"third",children:r.jsxs(r.Fragment,{children:[r.jsx(o,{backgroundColor:"success-subtle",padding:"md",children:"third"}),r.jsx(o,{backgroundColor:"success-subtle",padding:"md",children:"third"}),r.jsx(o,{backgroundColor:"success-subtle",padding:"md",children:"third"})]})}},a={args:{itemSize:"quarter",children:r.jsxs(r.Fragment,{children:[r.jsx(o,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),r.jsx(o,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),r.jsx(o,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),r.jsx(o,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"}),r.jsx(o,{backgroundColor:"primary-subtle",padding:"md",children:"quarter"})]})}},s={parameters:{docs:{description:{story:"Je kan een `gridItem` gebruiken om meerdere kolommen te beslaan."}}},args:{itemSize:"sixth",children:r.jsxs(r.Fragment,{children:[r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),r.jsx(o,{backgroundColor:"secondary-subtle",padding:"md",children:"sixth"}),r.jsx(m,{gridColumn:"span2",children:r.jsx(o,{backgroundColor:"secondary-subtle-2",padding:"md",children:"sixth (with span 2)"})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "full",
    children: <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"full"}
        </MoxBox>
      </>
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "half",
    children: <>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
        <MoxBox backgroundColor="secondary-subtle" padding="md">
          {"half"}
        </MoxBox>
      </>
  }
}`,...e.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "third",
    children: <>
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
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    itemSize: "quarter",
    children: <>
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
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Je kan een \`gridItem\` gebruiken om meerdere kolommen te beslaan."
      }
    }
  },
  args: {
    itemSize: "sixth",
    children: <>
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
  }
}`,...s.parameters?.docs?.source}}};const B=["Full","Half","Third","Quarter","Sixth"];export{n as Full,e as Half,a as Quarter,s as Sixth,d as Third,B as __namedExportsOrder,C as default};
