import{j as e}from"./iframe-CKt61RK6.js";import{g as a}from"./getStylePropArgTypes-N8gvkMTA.js";import{p as l}from"./propsToClassNames-CYgz3h9B.js";import{i as n}from"./Icon-BMw6ZJ0b.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-C5hDLZc_.js";import"./clsx-B-dksMZM.js";const i=["house-door","search","box-arrow-up-right","chevron-left","chevron-right","chevron-up","chevron-down","caret-up","caret-down","caret-left","caret-right","arrow-up","arrow-down","arrow-left","arrow-right","check","x","plus","dash","info","question","exclamation","heart","heart-fill","eye","eye-slash","lock","unlock","trash","pencil","gear","calendar","clock","download","upload","link","clipboard","filter","list","grid","menu-button-wide","person","person-fill","envelope","envelope-open","phone","phone-fill","chat","chat-dots","bell","bell-fill","house-door-fill","star","star-fill","star-half","stars"],y={title:"MoxCSS/Atoms/Media/Icon",tags:["autodocs"],argTypes:a(n),args:{},parameters:{layout:"fullscreen",docs:{source:{code:null}}},decorators:[o=>e.jsxs("div",{children:[e.jsx("style",{}),e.jsx(o,{})]})]},r={parameters:{layout:"fullscreen"},args:{fontSize:"xl",color:"primary"},render:o=>{const{stylePropClassNames:t}=l(n,o);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(80px, 1fr))",gap:"1.5rem",padding:"2rem",justifyItems:"center",alignItems:"center"},children:i.map(s=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("i",{className:`bi-${s} mox-icon ${t.join(" ")}`}),e.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.85em",color:"grey"},children:s})]},s))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  args: {
    fontSize: "xl",
    color: "primary"
  },
  render: props => {
    const {
      stylePropClassNames
    } = propsToClassNames(iconStyleProps, props);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
      gap: "1.5rem",
      padding: "2rem",
      justifyItems: "center",
      alignItems: "center"
    }}>
        {iconNames.map(icon => <div key={icon} style={{
        textAlign: "center"
      }}>
            <i className={\`bi-\${icon} mox-icon \${stylePropClassNames.join(" ")}\`}></i>
            <div style={{
          marginTop: "0.5rem",
          fontSize: "0.85em",
          color: "grey"
        }}>
              {icon}
            </div>
          </div>)}
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const h=["Default"];export{r as Default,h as __namedExportsOrder,y as default};
