import{j as e}from"./iframe-CKt61RK6.js";import"./preload-helper-Blwmkukt.js";const i={p:{display:"block"},a:{color:"primary",underline:"underline",underlineHover:"none"},blockquote:{backgroundColor:"primary-subtle-2",padding:"md",borderStartEndRadius:"lint-0.5"},"a.btn-primary":{backgroundColor:"primary",backgroundColorHover:"primary-hover",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",fontWeight:"bold"},"a.btn-secondary":{backgroundColor:"secondary",backgroundColorHover:"secondary-hover",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",fontWeight:"bold"},"a.btn-outline-primary":{backgroundColor:"plain-contrast",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",borderColor:"primary",borderColorHover:"primary-hover",color:"primary",borderWidth:"2px",borderStyle:"solid",fontWeight:"bold"},"a.btn-outline-secondary":{backgroundColor:"plain-contrast",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",borderColor:"secondary",borderColorHover:"secondary-hover",color:"secondary",borderWidth:"2px",borderStyle:"solid",fontWeight:"bold"},button:{backgroundColor:"primary",backgroundColorHover:"primary-hover",paddingBlock:"sm",paddingInline:"md",display:"inline-block",fontWeight:"bold"}},c={title:"MoxCSS/Atoms/Rich Text"},r={a:'<a href="#">This is a link</a>',"a.btn-primary":'<a href="#" class="btn-primary">This is a button</a>',"a.btn-secondary":'<a href="#" class="btn-secondary">This is a button</a>',"a.btn-outline-primary":'<a href="#" class="btn-outline-primary">This is a button</a>',"a.btn-outline-secondary":'<a href="#" class="btn-outline-secondary">This is a button</a>',button:"<button>This is a button</button>",p:"<p>This is a paragraph of text that provides information.</p>",blockquote:"<blockquote>This is a blockquote, used to indicate a section that is quoted from another source.<br /><br />Some more text here.</blockquote>"},o=()=>e.jsxs("div",{children:[e.jsx("style",{children:`
      @layer base {
:is(h1, p, code, hr, a) {
    all: revert;    
}
.mox-rich-text :is(h1, p, code) {
  all: unset; 
}
code {
  background-color: #f0f0f0;
}
.prop {
  font-weight: bold;
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
      }
    `}),e.jsx("h1",{children:"Rich Text"}),e.jsxs("p",{children:["Voor content die bijvoorbeeld uit een CMS komt, of gegenereerd is vanuit",e.jsx("strong",{children:" Markdown"})," is het lastig om de juiste styling classes toe te passen. Daarom is er ook een optie om een blok"," ",e.jsx("code",{children:"HTML"})," te wrappen in de class"," ",e.jsx("code",{children:"mox-rich-text"}),"."]}),e.jsx("p",{children:"Op bepaalde elementen binnen die container wordt dan een standaard styling toegepast. De styling is opgesteld in de mox-config via een lijst van properties en automatisch gegenereerd (zie de tweede column voor welke properties dit zijn)."}),e.jsxs("p",{children:["Alle mogelijke properties zijn"," ",e.jsx("a",{href:"/?path=/story/moxcss-atoms-properties--all-generated-css",children:"hier te zien"}),"."]}),e.jsx("p",{children:"Eventuele aanpassingen kan je doen via de design-tokens, of door CSS te schrijven die de standaard styling overschrijft (makkelijk is om deze styling te wrappen in een `@layer overrides`)."}),e.jsxs("table",{className:"generated-css-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"CSS Selector"}),e.jsx("th",{children:"Properties"}),e.jsx("th",{children:"Voorbeeld"})]})}),e.jsx("tbody",{children:Object.entries(i).sort(([n],[t])=>n.localeCompare(t)).map(([n,t])=>e.jsxs("tr",{children:[e.jsx("td",{children:n}),e.jsx("td",{children:Object.entries(t).map(([s,a])=>e.jsxs("div",{children:[e.jsx("span",{className:"prop",children:s}),":"," ",e.jsx("code",{children:JSON.stringify(a)})]},s))}),e.jsx("td",{children:r[n]?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mox-rich-text",dangerouslySetInnerHTML:{__html:r[n]}}),e.jsx("hr",{style:{marginBlock:"1rem"}}),e.jsxs("details",{children:[e.jsx("summary",{children:"html"}),e.jsx("code",{children:r[n]?r[n]:"N/A"})]})]}):"N/A"})]},n))})]})]});o.__docgenInfo={description:"",methods:[],displayName:"RichTextStory"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <div>
            <style>{\`
      @layer base {
:is(h1, p, code, hr, a) {
    all: revert;    
}
.mox-rich-text :is(h1, p, code) {
  all: unset; 
}
code {
  background-color: #f0f0f0;
}
.prop {
  font-weight: bold;
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
      }
    \`}</style>
            <h1>Rich Text</h1>
            <p>
                Voor content die bijvoorbeeld uit een CMS komt, of gegenereerd
                is vanuit
                <strong> Markdown</strong> is het lastig om de juiste styling
                classes toe te passen. Daarom is er ook een optie om een blok{" "}
                <code>HTML</code> te wrappen in de class{" "}
                <code>mox-rich-text</code>.
            </p>
            <p>
                Op bepaalde elementen binnen die container wordt dan een
                standaard styling toegepast. De styling is opgesteld in de
                mox-config via een lijst van properties en automatisch
                gegenereerd (zie de tweede column voor welke properties dit
                zijn).
            </p>
            <p>
                Alle mogelijke properties zijn{" "}
                <a href="/?path=/story/moxcss-atoms-properties--all-generated-css">
                    hier te zien
                </a>
                .
            </p>
            <p>
                Eventuele aanpassingen kan je doen via de design-tokens, of door
                CSS te schrijven die de standaard styling overschrijft
                (makkelijk is om deze styling te wrappen in een \`@layer
                overrides\`).
            </p>

            <table className="generated-css-table">
                <thead>
                    <tr>
                        <th>CSS Selector</th>
                        <th>Properties</th>
                        <th>Voorbeeld</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(richText).sort(([a], [b]) => a.localeCompare(b)).map(([el, props]) => <tr key={el}>
                                <td>{el}</td>
                                <td>
                                    {Object.entries(props).map(([key, value]) => <div key={key}>
                                                <span className="prop">
                                                    {key}
                                                </span>
                                                :{" "}
                                                <code>
                                                    {JSON.stringify(value)}
                                                </code>
                                            </div>)}
                                </td>
                                <td>
                                    {examples[el as keyof typeof examples] ? <>
                                            <div className="mox-rich-text" dangerouslySetInnerHTML={{
                __html: examples[el as keyof typeof examples]
              }} />
                                            <hr style={{
                marginBlock: "1rem"
              }} />
                                            <details>
                                                <summary>html</summary>
                                                <code>
                                                    {examples[el as keyof typeof examples] ? examples[el as keyof typeof examples] : "N/A"}
                                                </code>
                                            </details>
                                        </> : "N/A"}
                                </td>
                            </tr>)}
                </tbody>
            </table>
        </div>;
}`,...o.parameters?.docs?.source}}};const p=["RichTextStory"];export{o as RichTextStory,p as __namedExportsOrder,c as default};
