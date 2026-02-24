import{j as s}from"./iframe-BTu9IaQJ.js";import"./box-DeYAzi_E.js";import"./Shelf-B-9Jh5LN.js";import{s as t}from"./Stack-B_Z_bW6t.js";import"./PageGrid-Cy1qwyol.js";import"./Heading-LFnDdpbn.js";import"./TextBlock-DAaMrhIC.js";import"./Paragraph-BBbjFePX.js";import"./PageLead-QduAZ2Ue.js";import"./Link-eZf7iiAI.js";import"./Checkbox-CswodAoI.js";import"./RadioButton-CQq9_kOU.js";import{g as a}from"./getStylePropArgTypes-BW479ZKl.js";import{p as i}from"./propsToClassNames-ChSwfNU6.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./mox.config-CFm5mF-x.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
