import{j as s}from"./iframe-B_KLPEyi.js";import"./Box-SZ30tWzn.js";import"./Shelf-Ddc0ttrt.js";import{s as t}from"./Stack-UpTpywO-.js";import"./PageGrid-Z0D3OgxN.js";import"./Heading-BOz1QnEZ.js";import"./TextBlock-nZU9ywHr.js";import"./Paragraph-DHyM9evT.js";import"./PageLead-CKOa7vrA.js";import"./Link-B6VEQaHo.js";import"./Checkbox-CwPe2RJt.js";import"./RadioButton-2zw8mNLm.js";import{g as a}from"./getStylePropArgTypes-Bz_NPbZl.js";import{p as i}from"./propsToClassNames-BakxoANU.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./mox.config-C_BHjMHX.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
          section { 
            border: 2px solid orange;
          }
           section > div {
            background-color: lightblue;
        }
        `}),s.jsx(r,{})]})]},o={render:r=>{const{stylePropClassNames:e}=i(t,r);return s.jsxs("section",{className:`mox-stack ${e.join(" ")}`,children:[s.jsx("div",{children:"box 1"}),s.jsx("div",{children:"box 2"}),s.jsx("div",{children:"box 3"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => {
    const {
      stylePropClassNames
    } = propsToClassNames(stackStyleProps, props);
    return <section className={\`mox-stack \${stylePropClassNames.join(" ")}\`}>
        <div>{"box 1"}</div>
        <div>{"box 2"}</div>
        <div>{"box 3"}</div>
      </section>;
  }
}`,...o.parameters?.docs?.source}}};const C=["Default"];export{o as Default,C as __namedExportsOrder,k as default};
