import{j as s}from"./iframe-BVTeWQ9T.js";import"./box-C3201pZL.js";import"./Shelf-C943XzBL.js";import{s as t}from"./Stack-Dv2fR24A.js";import"./PageGrid-CRwBBnVw.js";import"./Heading-Cidu7oMZ.js";import"./TextBlock-DQn6nW7q.js";import"./Paragraph-CRUs5qGk.js";import"./PageLead-puYKzDAK.js";import"./Link-BbBMsi7R.js";import"./Checkbox-BqG1d4q1.js";import"./RadioButton-DQujNrOy.js";import{g as a}from"./getStylePropArgTypes-BW479ZKl.js";import{p as i}from"./propsToClassNames-ChSwfNU6.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./mox.config-CFm5mF-x.js";const k={title:"MoxCSS/Atoms/layout/Stack",tags:["autodocs"],argTypes:a(t),args:{},parameters:{docs:{source:{source:{type:"dynamic"}}}},decorators:[r=>s.jsxs("div",{children:[s.jsx("style",{children:`
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
