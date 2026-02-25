import{j as s}from"./iframe-B8frRrKf.js";import"./box-0o5QHxwu.js";import"./Shelf-CBVOCRSo.js";import{s as t}from"./Stack-BkO-co5i.js";import"./PageGrid-BPk0Qgg3.js";import"./Heading-DXcM399Y.js";import"./TextBlock-CNrO7nkW.js";import"./Paragraph-BHi3eN5P.js";import"./PageLead-Chhs2U-o.js";import"./Link-PvsvM3fT.js";import"./Checkbox-ap8etJjr.js";import"./RadioButton-B8o5x-8y.js";import{g as a}from"./getStylePropArgTypes-BW479ZKl.js";import{p as i}from"./propsToClassNames-ChSwfNU6.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./mox.config-CFm5mF-x.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
