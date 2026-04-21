import{r as b,j as e}from"./iframe-B2AZB9RS.js";import{m as l}from"./mox.config-C5hDLZc_.js";import"./preload-helper-Blwmkukt.js";const u={title:"MoxCSS/Atoms/Properties"},c=r=>r.replace(/[^a-zA-Z0-9-]/g,"-"),a=()=>{const[r,x]=b.useState({}),p=(t,i)=>()=>{x(n=>({...n,[t]:i}))};return e.jsxs("div",{children:[e.jsx("style",{children:`
h1, p, code {
all: revert;    
}
code {
        background-color: #f0f0f0;
}

.generated-css-table {
  border-collapse: collapse;
  width: 100%;
}
.generated-css-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.generated-css-table th,
.generated-css-table td {
  border: 1px solid #ccc;
  padding: 8px;

.limited-height {
  max-height: 135px;
  overflow-y: auto;
  display: block;
}
.breakpoint {
    font-weight: bold;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 2px 4px;
    font-family: monospace;
    margin-block: 8px;
}

    `}),e.jsx("h1",{children:"Gegenereerde CSS properties"}),e.jsx("p",{children:"Dit laat alle mogelijke CSS properties zien die gegenereerd zijn."}),e.jsxs("p",{children:["Je kan ze simpelweg gebruiken als classNames, maar met React wordt het nog eenvoudiger: bekijk bij een component welke property je kan instellen (bv een ",e.jsx("code",{children:"MoxBox"})," heeft o.a. de property"," ",e.jsx("code",{children:"backgroundColor"}),").",e.jsx("br",{}),"De mogelijke options voor die prop zijn dezelfde die hier opgesomd staan."]}),e.jsxs("table",{className:"generated-css-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Property"}),e.jsx("th",{title:"responsive?",children:"📐"}),e.jsx("th",{title:"state-dependant?",children:"👆"}),e.jsx("th",{children:"Options"}),e.jsx("th",{children:"Classname"}),e.jsx("th",{children:"Example"})]})}),e.jsx("tbody",{children:Object.entries(l.props).sort(([t],[i])=>t.localeCompare(i)).map(([t,i])=>e.jsxs("tr",{children:[e.jsx("td",{children:t}),e.jsx("td",{children:"responsive"in i&&i.responsive?"✔":""}),e.jsx("td",{children:"state"in i&&i.state?e.jsx("pre",{children:i.state}):""}),e.jsx("td",{children:e.jsx("div",{className:"limited-height",children:e.jsxs("ul",{style:{margin:0,padding:0,listStyle:"none"},children:[Object.keys(i.options).map(n=>{const s=c(n);return e.jsx("li",{children:e.jsx("button",{type:"button",onClick:p(t,s),style:{...r[t]===s?{fontWeight:"bold",textDecoration:"underline"}:{}},children:s})},s)}),"responsive"in i&&i.responsive&&e.jsxs(e.Fragment,{children:[Object.entries(l.viewportBreakpoints).map(([n,s])=>e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breakpoint",children:`Media: ${n} (${s}px)`}),Object.keys(i.options).map(d=>{const o=c(d);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("button",{type:"button",onClick:p(t,`${o}@${n}Min`),style:{...r[t]===`${o}@${n}Min`?{fontWeight:"bold",textDecoration:"underline"}:{}},children:`${o}@${n}Min`})},`${n}-Min-${o}`),e.jsx("li",{children:e.jsx("button",{type:"button",onClick:p(t,`${o}@${n}Max`),style:{...r[t]===`${o}@${n}Max`?{fontWeight:"bold",textDecoration:"underline"}:{}},children:`${o}@${n}Max`})},`${n}-Max-${o}`)]})})]})),Object.entries(l.containerBreakpoints).map(([n,s])=>e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breakpoint",children:`Container: ${n} (${s}px)`}),Object.keys(i.options).map(d=>{const o=c(d);return e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx("button",{type:"button",onClick:p(t,`${o}@${n}Min`),style:{...r[t]===`${o}@${n}Min`?{fontWeight:"bold",textDecoration:"underline"}:{}},children:`${o}@${n}Min`})},`${n}-Min-${o}`),e.jsx("li",{children:e.jsx("button",{type:"button",onClick:p(t,`${o}@${n}Max`),style:{...r[t]===`${o}@${n}Max`?{fontWeight:"bold",textDecoration:"underline"}:{}},children:`${o}@${n}Max`})},`${n}-Max-${o}`)]})})]}))]})]})})}),e.jsx("td",{children:e.jsxs("pre",{children:[l.prefix,"-",t,"-",r[t]?r[t]:e.jsx("span",{style:{color:"grey"},children:"<value>"})]})}),e.jsx("td",{})]},t))})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"AllGeneratedCss"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [propStates, setPropStates] = useState<Record<string, string>>({});
  const setProp = (propName: string, option: string) => () => {
    setPropStates(prevStates => ({
      ...prevStates,
      [propName]: option
    }));
  };
  return <div>
      <style>{\`
h1, p, code {
all: revert;    
}
code {
        background-color: #f0f0f0;
}

.generated-css-table {
  border-collapse: collapse;
  width: 100%;
}
.generated-css-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.generated-css-table th,
.generated-css-table td {
  border: 1px solid #ccc;
  padding: 8px;

.limited-height {
  max-height: 135px;
  overflow-y: auto;
  display: block;
}
.breakpoint {
    font-weight: bold;
    background-color: #e0e0e0;
    border-radius: 4px;
    padding: 2px 4px;
    font-family: monospace;
    margin-block: 8px;
}

    \`}</style>
      <h1>Gegenereerde CSS properties</h1>
      <p>Dit laat alle mogelijke CSS properties zien die gegenereerd zijn.</p>
      <p>
        Je kan ze simpelweg gebruiken als classNames, maar met React wordt het
        nog eenvoudiger: bekijk bij een component welke property je kan
        instellen (bv een <code>MoxBox</code> heeft o.a. de property{" "}
        <code>backgroundColor</code>).
        <br />
        De mogelijke options voor die prop zijn dezelfde die hier opgesomd
        staan.
      </p>

      <table className="generated-css-table">
        <thead>
          <tr>
            <th>Property</th>
            <th title="responsive?">📐</th>
            <th title="state-dependant?">👆</th>
            <th>Options</th>
            <th>Classname</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(moxConfig.props).sort(([a], [b]) => a.localeCompare(b)).map(([propName, propConfig]) => <tr key={propName}>
                <td>{propName}</td>
                <td>
                  {"responsive" in propConfig && propConfig.responsive ? "✔" : ""}
                </td>
                <td>
                  {"state" in propConfig && propConfig.state ? <pre>{propConfig.state}</pre> : ""}
                </td>
                <td>
                  <div className="limited-height">
                    <ul style={{
                margin: 0,
                padding: 0,
                listStyle: "none"
              }}>
                      {Object.keys(propConfig.options).map(_option => {
                  const option = slugifyOption(_option);
                  return <li key={option}>
                            <button type="button" onClick={setProp(propName, option)} style={{
                      ...(propStates[propName] === option ? {
                        fontWeight: "bold",
                        textDecoration: "underline"
                      } : {})
                    }}>
                              {option}
                            </button>
                          </li>;
                })}
                      {"responsive" in propConfig && propConfig.responsive && <>
                          {Object.entries(moxConfig.viewportBreakpoints).map(([breakpoint, bpSize]) => <>
                                <li className="breakpoint">{\`Media: \${breakpoint} (\${bpSize}px)\`}</li>
                                {Object.keys(propConfig.options).map(_option => {
                      const option = slugifyOption(_option);
                      return <>
                                        <li key={\`\${breakpoint}-Min-\${option}\`}>
                                          <button type="button" onClick={setProp(propName, \`\${option}@\${breakpoint}Min\`)} style={{
                            ...(propStates[propName] === \`\${option}@\${breakpoint}Min\` ? {
                              fontWeight: "bold",
                              textDecoration: "underline"
                            } : {})
                          }}>{\`\${option}@\${breakpoint}Min\`}</button>
                                        </li>
                                        <li key={\`\${breakpoint}-Max-\${option}\`}>
                                          <button type="button" onClick={setProp(propName, \`\${option}@\${breakpoint}Max\`)} style={{
                            ...(propStates[propName] === \`\${option}@\${breakpoint}Max\` ? {
                              fontWeight: "bold",
                              textDecoration: "underline"
                            } : {})
                          }}>
                                            {\`\${option}@\${breakpoint}Max\`}
                                          </button>
                                        </li>
                                      </>;
                    })}
                              </>)}
                          {Object.entries(moxConfig.containerBreakpoints).map(([breakpoint, bpSize]) => <>
                                <li className="breakpoint">{\`Container: \${breakpoint} (\${bpSize}px)\`}</li>
                                {Object.keys(propConfig.options).map(_option => {
                      const option = slugifyOption(_option);
                      return <>
                                        <li key={\`\${breakpoint}-Min-\${option}\`}>
                                          <button type="button" onClick={setProp(propName, \`\${option}@\${breakpoint}Min\`)} style={{
                            ...(propStates[propName] === \`\${option}@\${breakpoint}Min\` ? {
                              fontWeight: "bold",
                              textDecoration: "underline"
                            } : {})
                          }}>{\`\${option}@\${breakpoint}Min\`}</button>
                                        </li>
                                        <li key={\`\${breakpoint}-Max-\${option}\`}>
                                          <button type="button" onClick={setProp(propName, \`\${option}@\${breakpoint}Max\`)} style={{
                            ...(propStates[propName] === \`\${option}@\${breakpoint}Max\` ? {
                              fontWeight: "bold",
                              textDecoration: "underline"
                            } : {})
                          }}>{\`\${option}@\${breakpoint}Max\`}</button>
                                        </li>
                                      </>;
                    })}
                              </>)}
                        </>}
                    </ul>
                  </div>
                </td>
                <td>
                  <pre>
                    {moxConfig.prefix}-{propName}-
                    {propStates[propName] ? propStates[propName] : <span style={{
                color: "grey"
              }}>&lt;value&gt;</span>}
                  </pre>
                </td>
                <td></td>
              </tr>)}
        </tbody>
      </table>
    </div>;
}`,...a.parameters?.docs?.source}}};const j=["AllGeneratedCss"];export{a as AllGeneratedCss,j as __namedExportsOrder,u as default};
