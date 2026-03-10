import{j as s}from"./iframe-B3yi9PtC.js";import"./Box-DL1lCic8.js";import"./Shelf-CPRSfPUb.js";import{s as t}from"./Stack-CpI4e53M.js";import"./PageGrid-BzwMyR28.js";import"./Heading-0vg0fcq0.js";import"./TextBlock-328kAuyc.js";import"./Paragraph-CH7CV7JG.js";import"./PageLead-B7hgDvmY.js";import"./Link-CAedjDd1.js";import{p as a}from"./propsToClassNames-CaYXZ-nc.js";import"./Image-DCbqrM4O.js";import"./Checkbox-CrbZ0rcq.js";import"./RadioButton-Cx_rHslk.js";import{g as i}from"./getStylePropArgTypes-Cpudgmod.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./mox.config-BjroUyw3.js";const C={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:i(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
          section { 
            border: 2px solid orange;
          }
           section > div {
            background-color: lightblue;
        }
        `}),s.jsx(r,{})]})]},o={render:r=>{const{stylePropClassNames:e}=a(t,r);return s.jsxs("section",{className:`mox-stack ${e.join(" ")}`,children:[s.jsx("div",{children:"box 1"}),s.jsx("div",{children:"box 2"}),s.jsx("div",{children:"box 3"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,C as default};
