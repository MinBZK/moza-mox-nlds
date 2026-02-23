import{j as e}from"./iframe-B_KLPEyi.js";import{g as a}from"./getStylePropArgTypes-Bz_NPbZl.js";import{p as n}from"./propsToClassNames-BakxoANU.js";import"./mox.config-C_BHjMHX.js";import"./preload-helper-Blwmkukt.js";const t=["size","color","colorHover"],m={title:"MoxCSS/Atoms/Media/Svg",tags:["autodocs"],argTypes:a(t),parameters:{docs:{description:{component:"If you can't find a suitable icon from the list, you can use your own custom SVGs. Use the size, color, and other properties to style the SVG. Simply copy/paste any SVG code and apply the class to control its appearance. Note that - since these are SVGs and the default icons use an icon-font, you'll need to use the `size` property instead of `fontSize` to control the size of the SVG icons."}}},args:{size:"xl",color:"primary"},decorators:[o=>e.jsxs("div",{children:[e.jsx("style",{}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:e.jsx(o,{})})]})]},s={parameters:{layout:"fullscreen"},render:o=>{const{stylePropClassNames:r}=n(t,o);return e.jsxs("svg",{className:`mox-svg ${r.join(" ")}`,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: props => {
    const {
      stylePropClassNames
    } = propsToClassNames(svgStyleProps, props);
    return <svg className={\`mox-svg \${stylePropClassNames.join(" ")}\`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
      </svg>;
  }
}`,...s.parameters?.docs?.source}}};const d=["Default"];export{s as Default,d as __namedExportsOrder,m as default};
