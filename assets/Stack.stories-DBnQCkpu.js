import{j as s}from"./iframe-CqK4SbLH.js";import"./Box-Dgpw02Xr.js";import"./Shelf-pK8RN0io.js";import{s as t}from"./Stack-Cwm4o_FD.js";import"./PageGrid-ziylK6ym.js";import"./Heading-DOsb2oF1.js";import"./TextBlock-BqE9WAh0.js";import"./Paragraph-DPUVZws2.js";import"./PageLead-CdNeQ0wN.js";import"./Link-DD5BkrhZ.js";import"./Checkbox-Bo6_OFgQ.js";import"./RadioButton-CE5HCECk.js";import{g as a}from"./getStylePropArgTypes-Bz_NPbZl.js";import{p as i}from"./propsToClassNames-BakxoANU.js";import"./preload-helper-DivXI2Cm.js";import"./clsx-B-dksMZM.js";import"./mox.config-C_BHjMHX.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
