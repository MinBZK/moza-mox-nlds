const i=["4xs","3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl"],v=["0","auto","inherit","fit-content","max-content","min-content"],s=["0","auto","inherit"],d=["primary","primary-hover","primary-subtle","primary-subtle-hover","primary-subtle-2","primary-subtle-2-hover","secondary","secondary-hover","secondary-subtle","secondary-subtle-hover","secondary-subtle-2","secondary-subtle-2-hover","neutral","neutral-hover","neutral-subtle","neutral-subtle-hover","neutral-subtle-2","neutral-subtle-2-hover","accent","accent-hover","accent-subtle","accent-subtle-hover","accent-subtle-2","accent-subtle-2-hover","info","info-hover","info-subtle","info-subtle-hover","info-subtle-2","info-subtle-2-hover","success","success-hover","success-subtle","success-subtle-hover","success-subtle-2","success-subtle-2-hover","warning","warning-hover","warning-subtle","warning-subtle-hover","warning-subtle-2","warning-subtle-2-hover","error","error-hover","error-subtle","error-subtle-hover","error-subtle-2","error-subtle-2-hover","zwart","wit","transparant"],t=(n,e,g)=>{const u={};for(const m of n){const b=e.map(w=>`${w}: var(--mox-${g}-${m});`);u[m]=b.join(`
`)}return u},a=(n,e)=>{const g={};for(const u of n){const m=e.map(b=>`${b}: ${u};`);g[u]=m.join(`
`)}return g},r=String.raw,h={0:r`
    border-radius: 0;
  `,"1px":r`
    border-radius: 1px;
  `,"2px":r`
    border-radius: 2px;
  `,"4px":r`
    border-radius: 4px;
  `,"8px":r`
    border-radius: 8px;
  `,circle:r`
    border-radius: 50%;
  `},x=n=>({...h,"lint-0.25":r`border-${n}-radius: calc(0.25 * var(--mox-lint-inline-size));`,"lint-0.5":r`border-${n}-radius: calc(0.5 * var(--mox-lint-inline-size));`,"lint-1":r`border-${n}-radius: calc(1 * var(--mox-lint-inline-size));`,"lint-2":r`border-${n}-radius: calc(2 * var(--mox-lint-inline-size));`,"lint-4":r`border-${n}-radius: calc(4 * var(--mox-lint-inline-size));`,"lint-8":r`border-${n}-radius: calc(8 * var(--mox-lint-inline-size));`}),y={borderRadius:{options:h,responsive:!0},borderStartStartRadius:{options:x("start-start"),responsive:!0},borderStartEndRadius:{options:x("start-end"),responsive:!0},borderEndStartRadius:{options:x("end-start"),responsive:!0},borderEndEndRadius:{options:x("end-end"),responsive:!0},borderWidth:{options:{0:r`
        border-width: 0;
      `,"1px":r`
        border-width: 1px;
      `,"2px":r`
        border-width: 2px;
      `,"4px":r`
        border-width: 4px;
      `,"8px":r`
        border-width: 8px;
      `}},borderColor:{options:t(d,["border-color"],"color")},borderColorHover:{options:t(d,["border-color"],"color"),state:"hover"},borderColorActive:{options:t(d,["border-color"],"color"),state:"active"},borderStyle:{options:{solid:r`
        border-style: solid;
      `,dashed:r`
        border-style: dashed;
      `,dotted:r`
        border-style: dotted;
      `,none:r`
        border-style: none;
      `}},backgroundColor:{options:d.reduce((n,e)=>({...n,[e]:r`
          background-color: var(--mox-color-${e});
          --mox-text-color: var(--mox-color-${e}-contrast);
          color: var(--mox-text-color);
        `}),{})},backgroundColorHover:{options:d.reduce((n,e)=>({...n,[e]:r`
          background-color: var(--mox-color-${e});
          --mox-text-color: var(--mox-color-${e}-contrast);
          color: var(--mox-text-color);
        `}),{}),state:"hover"},backgroundColorActive:{options:d.reduce((n,e)=>({...n,[e]:r`
          background-color: var(--mox-color-${e});
          --mox-text-color: var(--mox-color-${e}-contrast);
          color: var(--mox-text-color);
        `}),{}),state:"active"},size:{options:{...t(i,["inline-size","block-size"],"space"),...a(v,["inline-size","block-size"])},responsive:!0},inlineSize:{options:{...t(i,["inline-size"],"space"),...a(v,["inline-size"])},responsive:!0},blockSize:{options:{...t(i,["block-size"],"space"),...a(v,["block-size"])},responsive:!0},padding:{options:{...t(i,["padding"],"space"),...a(s,["padding"])},responsive:!0},paddingBlock:{options:{...t(i,["padding-block"],"space"),...a(s,["padding-block"])},responsive:!0},paddingInline:{options:{...t(i,["padding-inline"],"space"),...a(s,["padding-inline"])},responsive:!0},paddingBlockStart:{options:{...t(i,["padding-block-start"],"space"),...a(s,["padding-block-start"])},responsive:!0},paddingBlockEnd:{options:{...t(i,["padding-block-end"],"space"),...a(s,["padding-block-end"])},responsive:!0},paddingInlineStart:{options:{...t(i,["padding-inline-start"],"space"),...a(s,["padding-inline-start"])},responsive:!0},paddingInlineEnd:{options:{...t(i,["padding-inline-end"],"space"),...a(s,["padding-inline-end"])},responsive:!0}},o=String.raw,f={direction:{options:{row:o`
        flex-direction: row;
      `,column:o`
        flex-direction: column;
      `,rowReverse:o`
        flex-direction: row-reverse;
      `,columnReverse:o`
        flex-direction: column-reverse;
      `},responsive:!0},wrap:{options:{nowrap:o`
        flex-wrap: nowrap;
      `,wrap:o`
        flex-wrap: wrap;
      `,wrapReverse:o`
        flex-wrap: wrap-reverse;
      `},responsive:!0},alignItems:{options:{stretch:o`
        align-items: stretch;
      `,center:o`
        align-items: center;
      `,start:o`
        align-items: flex-start;
      `,end:o`
        align-items: flex-end;
      `,baseline:o`
        align-items: baseline;
      `,initial:o`
        align-items: initial;
      `,inherit:o`
        align-items: inherit;
      `},responsive:!0},justifyContent:{options:{flexStart:o`
        justify-content: flex-start;
      `,flexEnd:o`
        justify-content: flex-end;
      `,center:o`
        justify-content: center;
      `,spaceBetween:o`
        justify-content: space-between;
      `,spaceAround:o`
        justify-content: space-around;
      `,spaceEvenly:o`
        justify-content: space-evenly;
      `},responsive:!0},itemSize:{options:{half:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-half)
          ),
          minmax(0, 1fr)
        );
      `,third:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-third)
          ),
          minmax(0, 1fr)
        );
      `,quarter:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-quarter)
          ),
          minmax(0, 1fr)
        );
      `,sixth:o`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-sixth)
          ),
          minmax(0, 1fr)
        );
      `},responsive:!0},gridColumn:{options:{window:o`
        --mox-page-grid-column: window;
      `,page:o`
        --mox-page-grid-column: page;
      `,span1:o`
        --mox-page-grid-column: span 1;
      `,span2:o`
        --mox-page-grid-column: span 2;
      `,span3:o`
        --mox-page-grid-column: span 3;
      `,span4:o`
        --mox-page-grid-column: span 4;
      `,span5:o`
        --mox-page-grid-column: span 5;
      `,span6:o`
        --mox-page-grid-column: span 6;
      `,span7:o`
        --mox-page-grid-column: span 7;
      `,span8:o`
        --mox-page-grid-column: span 8;
      `,span9:o`
        --mox-page-grid-column: span 9;
      `,span10:o`
        --mox-page-grid-column: span 10;
      `,span11:o`
        --mox-page-grid-column: span 11;
      `,span12:o`
        --mox-page-grid-column: span 12;
      `},responsive:!0},gridColumnStart:{options:{windowStart:o`
        --mox-page-grid-column-start: window-start;
      `,pageStart:o`
        --mox-page-grid-column-start: page-start;
      `,pageEnd:o`
        --mox-page-grid-column-start: page-end;
      `,windowEnd:o`
        --mox-page-grid-column-start: window-end;
      `,0:o`
        --mox-page-grid-column-start: 0;
      `,1:o`
        --mox-page-grid-column-start: 1;
      `,2:o`
        --mox-page-grid-column-start: 2;
      `,3:o`
        --mox-page-grid-column-start: 3;
      `,4:o`
        --mox-page-grid-column-start: 4;
      `,5:o`
        --mox-page-grid-column-start: 5;
      `,6:o`
        --mox-page-grid-column-start: 6;
      `,7:o`
        --mox-page-grid-column-start: 7;
      `,8:o`
        --mox-page-grid-column-start: 8;
      `,9:o`
        --mox-page-grid-column-start: 9;
      `,10:o`
        --mox-page-grid-column-start: 10;
      `,11:o`
        --mox-page-grid-column-start: 11;
      `,12:o`
        --mox-page-grid-column-start: 12;
      `,13:o`
        --mox-page-grid-column-start: 13;
      `},responsive:!0},gridColumnEnd:{options:{windowStart:o`
        --mox-page-grid-column-end: window-start;
      `,pageStart:o`
        --mox-page-grid-column-end: page-start;
      `,windowEnd:o`
        --mox-page-grid-column-end: window-end;
      `,pageEnd:o`
        --mox-page-grid-column-end: page-end;
      `,0:o`
        --mox-page-grid-column-end: 0;
      `,1:o`
        --mox-page-grid-column-end: 1;
      `,2:o`
        --mox-page-grid-column-end: 2;
      `,3:o`
        --mox-page-grid-column-end: 3;
      `,4:o`
        --mox-page-grid-column-end: 4;
      `,5:o`
        --mox-page-grid-column-end: 5;
      `,6:o`
        --mox-page-grid-column-end: 6;
      `,7:o`
        --mox-page-grid-column-end: 7;
      `,8:o`
        --mox-page-grid-column-end: 8;
      `,9:o`
        --mox-page-grid-column-end: 9;
      `,10:o`
        --mox-page-grid-column-end: 10;
      `,11:o`
        --mox-page-grid-column-end: 11;
      `,12:o`
        --mox-page-grid-column-end: 12;
      `,13:o`
        --mox-page-grid-column-end: 13;
      `},responsive:!0},gap:{options:{...t(i,["gap"],"space"),...a(s,["gap"])},responsive:!0},rowGap:{options:{...t(i,["row-gap"],"space"),...a(s,["row-gap"])},responsive:!0},columnGap:{options:{...t(i,["column-gap"],"space"),...a(s,["column-gap"])},responsive:!0}},c=String.raw,k={underline:{options:{underline:c`
        text-decoration: underline;
      `,strikethrough:c`
        text-decoration: line-through;
      `,none:c`
        text-decoration: none;
      `}},underlineHover:{options:{underline:c`
        text-decoration: underline;
      `,strikethrough:c`
        text-decoration: line-through;
      `,none:c`
        text-decoration: none;
      `},state:"hover"}},S=String.raw,C={markup:{options:{p:S`
        text-decoration: none;
        margin-block: 1rem;
      `,image:"",button:""}}},l=String.raw,$={fontSize:{options:i.reduce((n,e)=>(n[e]=l`
          --current-font-size: var(--mox-space-${e});
          font-size: var(--current-font-size);
        `,n),{}),responsive:!0},color:{options:d.reduce((n,e)=>({...n,[e]:l`
          --text-color: var(--mox-color-${e});
          color: var(--text-color);
        `}),{})},colorHover:{options:d.reduce((n,e)=>({...n,[e]:l`
          --text-color-hover: var(--mox-color-${e});
          color: var(--text-color-hover);
        `}),{}),state:"hover"},fontWeight:{options:{light:l`
        font-weight: 300;
      `,normal:l`
        font-weight: 400;
      `,medium:l`
        font-weight: 500;
      `,bold:l`
        font-weight: 700;
      `}},lineHeight:{options:{normal:l`
        line-height: 1.5;
      `,tight:l`
        line-height: 1.3;
      `}}},p=String.raw,z={display:{options:{block:p`
        display: block;
        display: flow-root;
      `,inline:p`
        display: inline;
      `,"inline-block":p`
        display: inline-block;
      `,flex:p`
        display: flex;
      `,grid:p`
        display: grid;
      `,none:p`
        display: none;
      `},responsive:!0}},H={mobile:600,tablet:900,desktop:1200,mq1440:1440},B={cq200:200,cq400:400,cq600:600,cq800:800},E={...f,...k,...$,...y,...z,...C},R={prefix:"mox",viewportBreakpoints:H,containerBreakpoints:B,props:E},I={p:{markup:"p",alignItems:"start",inlineSize:{mobileMin:"md",mobileMax:"xs"}},a:{color:"primary",underline:"underline",underlineHover:"none"},blockquote:{backgroundColor:"primary-subtle-2",padding:"md",borderStartStartRadius:"lint-0.5"},"a.btn-primary":{backgroundColor:"primary",backgroundColorHover:"primary-hover",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",fontWeight:"bold"},"a.btn-secondary":{backgroundColor:"secondary",backgroundColorHover:"secondary-hover",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",fontWeight:"bold"},"a.btn-outline-primary":{backgroundColor:"wit",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",borderColor:"primary",borderColorHover:"primary-hover",color:"primary",borderWidth:"2px",borderStyle:"solid",fontWeight:"bold"},"a.btn-outline-secondary":{backgroundColor:"wit",paddingBlock:"sm",paddingInline:"md",underline:"none",underlineHover:"none",display:"inline-block",borderColor:"secondary",borderColorHover:"secondary-hover",color:"secondary",borderWidth:"2px",borderStyle:"solid",fontWeight:"bold"},button:{backgroundColor:"primary",backgroundColorHover:"primary-hover",paddingBlock:"sm",paddingInline:"md",display:"inline-block",fontWeight:"bold"}};export{I as a,R as m};
