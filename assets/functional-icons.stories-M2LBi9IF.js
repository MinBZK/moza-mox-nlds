import{j as n}from"./iframe-CqK4SbLH.js";import{R as r}from"./react-icons.esm-BmmrIlkX.js";import"./preload-helper-DivXI2Cm.js";const c={title:"Icons/Radix",parameters:{layout:"fullscreen"}},t=()=>{const o=Object.keys(r).filter(e=>e.endsWith("Icon"));return console.log("Number of Radix icons:",o.length),n.jsxs("div",{style:{margin:"2rem"},children:[n.jsx("h1",{children:`All Radix Icons (${o.length})`}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(124px, 1fr))",gap:"2rem",padding:"2rem",justifyItems:"center",alignItems:"center"},children:o.map(e=>{const s=r[e];return n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx(s,{width:32,height:32,color:"var(--mox-color-primary)"}),n.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.85em"},children:e})]},e)})})]})};t.__docgenInfo={description:"",methods:[],displayName:"AllRadixIcons"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const allIconNames = Object.keys(RadixIcons).filter(name => name.endsWith("Icon"));
  console.log("Number of Radix icons:", allIconNames.length);
  return <div style={{
    margin: "2rem"
  }}>
      <h1>{\`All Radix Icons (\${allIconNames.length})\`}</h1>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(124px, 1fr))",
      gap: "2rem",
      padding: "2rem",
      justifyItems: "center",
      alignItems: "center"
    }}>
        {allIconNames.map(name => {
        const Icon = RadixIcons[name as keyof typeof RadixIcons] as React.ComponentType<{
          width?: number;
          height?: number;
          color?: string;
        }>;
        return <div key={name} style={{
          textAlign: "center"
        }}>
              <Icon width={32} height={32} color="var(--mox-color-primary)" />
              <div style={{
            marginTop: "0.5rem",
            fontSize: "0.85em"
          }}>
                {name}
              </div>
            </div>;
      })}
      </div>
    </div>;
}`,...t.parameters?.docs?.source}}};const m=["AllRadixIcons"];export{t as AllRadixIcons,m as __namedExportsOrder,c as default};
