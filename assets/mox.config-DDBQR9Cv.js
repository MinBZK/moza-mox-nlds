const i=["6xs","5xs","4xs","3xs","2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl"],c=["0","auto","inherit","fit-content","max-content","min-content"],l=["0","auto","inherit"],d=["plain","plain-contrast","primary","primary-hover","primary-subtle","primary-subtle-hover","primary-subtle-2","primary-subtle-2-hover","secondary","secondary-hover","secondary-subtle","secondary-subtle-hover","secondary-subtle-2","secondary-subtle-2-hover","neutral","neutral-hover","neutral-subtle","neutral-subtle-hover","neutral-subtle-2","neutral-subtle-2-hover","accent","accent-hover","accent-subtle","accent-subtle-hover","accent-subtle-2","accent-subtle-2-hover","info","info-hover","info-subtle","info-subtle-hover","info-subtle-2","info-subtle-2-hover","success","success-hover","success-subtle","success-subtle-hover","success-subtle-2","success-subtle-2-hover","warning","warning-hover","warning-subtle","warning-subtle-hover","warning-subtle-2","warning-subtle-2-hover","danger","danger-hover","danger-subtle","danger-subtle-hover","danger-subtle-2","danger-subtle-2-hover","transparent"],t=(r,n,g)=>{const m={};for(const x of r){const f=n.map(h=>`${h}: var(--mox-${g}-${x});`);m[x]=f.join(`
`)}return m},s=(r,n)=>{const g={};for(const m of r){const x=n.map(f=>`${f}: ${m};`);g[m]=x.join(`
`)}return g},o=String.raw,v={0:o`
    border-radius: 0;
  `,"1px":o`
    border-radius: 1px;
  `,"2px":o`
    border-radius: 2px;
  `,"4px":o`
    border-radius: 4px;
  `,"8px":o`
    border-radius: 8px;
  `,circle:o`
    border-radius: calc(1px * infinity);
  `},b=r=>({...v,"lint-0.25":o`border-${r}-radius: calc(0.25 * var(--mox-lint-inline-size));`,"lint-0.5":o`border-${r}-radius: calc(0.5 * var(--mox-lint-inline-size));`,"lint-1":o`border-${r}-radius: calc(1 * var(--mox-lint-inline-size));`,"lint-2":o`border-${r}-radius: calc(2 * var(--mox-lint-inline-size));`,"lint-4":o`border-${r}-radius: calc(4 * var(--mox-lint-inline-size));`,"lint-8":o`border-${r}-radius: calc(8 * var(--mox-lint-inline-size));`}),y={borderRadius:{options:v,responsive:!0},borderStartStartRadius:{options:b("start-start"),responsive:!0},borderStartEndRadius:{options:b("start-end"),responsive:!0},borderEndStartRadius:{options:b("end-start"),responsive:!0},borderEndEndRadius:{options:b("end-end"),responsive:!0},borderWidth:{options:{0:o`
        border-width: 0;
      `,"1px":o`
        border-width: 1px;
      `,"2px":o`
        border-width: 2px;
      `,"4px":o`
        border-width: 4px;
      `,"8px":o`
        border-width: 8px;
      `}},borderColor:{options:t(d,["border-color"],"color")},borderColorHover:{options:t(d,["border-color"],"color"),state:"hover"},borderColorActive:{options:t(d,["border-color"],"color"),state:"active"},borderStyle:{options:{solid:o`
        border-style: solid;
      `,dashed:o`
        border-style: dashed;
      `,dotted:o`
        border-style: dotted;
      `,none:o`
        border-style: none;
      `}},borderBlockStyle:{options:{solid:o`
        border-block-style: solid;
      `,dashed:o`
        border-block-style: dashed;
      `,dotted:o`
        border-block-style: dotted;
      `,none:o`
        border-block-style: none;
      `}},borderBlockStartStyle:{options:{solid:o`
        border-block-start-style: solid;
      `,dashed:o`
        border-block-start-style: dashed;
      `,dotted:o`
        border-block-start-style: dotted;
      `,none:o`
        border-block-start-style: none;
      `}},borderBlockEndStyle:{options:{solid:o`
        border-block-end-style: solid;
      `,dashed:o`
        border-block-end-style: dashed;
      `,dotted:o`
        border-block-end-style: dotted;
      `,none:o`
        border-block-end-style: none;
      `}},borderInlineStyle:{options:{solid:o`
        border-inline-style: solid;
      `,dashed:o`
        border-inline-style: dashed;
      `,dotted:o`
        border-inline-style: dotted;
      `,none:o`
        border-inline-style: none;
      `}},borderInlineStartStyle:{options:{solid:o`
        border-inline-start-style: solid;
      `,dashed:o`
        border-inline-start-style: dashed;
      `,dotted:o`
        border-inline-start-style: dotted;
      `,none:o`
        border-inline-start-style: none;
      `}},borderInlineEndStyle:{options:{solid:o`
        border-inline-end-style: solid;
      `,dashed:o`
        border-inline-end-style: dashed;
      `,dotted:o`
        border-inline-end-style: dotted;
      `,none:o`
        border-inline-end-style: none;
      `}},backgroundColor:{options:d.reduce((r,n)=>({...r,[n]:o`
          background-color: var(--mox-color-${n});
          --mox-text-color: var(--mox-color-${n}-contrast);
          color: var(--mox-text-color);
        `}),{})},backgroundColorHover:{options:d.reduce((r,n)=>({...r,[n]:o`
          background-color: var(--mox-color-${n});
          --mox-text-color: var(--mox-color-${n}-contrast);
          color: var(--mox-text-color);
        `}),{}),state:"hover"},backgroundColorActive:{options:d.reduce((r,n)=>({...r,[n]:o`
          background-color: var(--mox-color-${n});
          --mox-text-color: var(--mox-color-${n}-contrast);
          color: var(--mox-text-color);
        `}),{}),state:"active"},opacity:{options:{0:o`
        opacity: 0;
      `,"25%":o`
        opacity: 0.25;
      `}},size:{options:{...t(i,["inline-size","block-size"],"space"),...s(c,["inline-size","block-size"])},responsive:!0},inlineSize:{options:{...t(i,["inline-size"],"space"),...s(c,["inline-size"])},responsive:!0},blockSize:{options:{...t(i,["block-size"],"space"),...s(c,["block-size"])},responsive:!0},minInlineSize:{options:{...t(i,["min-inline-size"],"space"),...s(c,["min-inline-size"])},responsive:!0},minBlockSize:{options:{...t(i,["min-block-size"],"space"),...s(c,["min-block-size"])},responsive:!0},maxInlineSize:{options:{...t(i,["max-inline-size"],"space"),...s(c,["max-inline-size"])},responsive:!0},maxBlockSize:{options:{...t(i,["max-block-size"],"space"),...s(c,["max-block-size"])},responsive:!0},padding:{options:{...t(i,["padding"],"space"),...s(l,["padding"])},responsive:!0},paddingBlock:{options:{...t(i,["padding-block"],"space"),...s(l,["padding-block"])},responsive:!0},paddingInline:{options:{...t(i,["padding-inline"],"space"),...s(l,["padding-inline"])},responsive:!0},paddingBlockStart:{options:{...t(i,["padding-block-start"],"space"),...s(l,["padding-block-start"])},responsive:!0},paddingBlockEnd:{options:{...t(i,["padding-block-end"],"space"),...s(l,["padding-block-end"])},responsive:!0},paddingInlineStart:{options:{...t(i,["padding-inline-start"],"space"),...s(l,["padding-inline-start"])},responsive:!0},paddingInlineEnd:{options:{...t(i,["padding-inline-end"],"space"),...s(l,["padding-inline-end"])},responsive:!0},order:{options:{auto:o`
        order: auto;
      `,"-5":o`
        order: -5;
      `,"-4":o`
        order: -4;
      `,"-3":o`
        order: -3;
      `,"-2":o`
        order: -2;
      `,"-1":o`
        order: -1;
      `,0:o`
        order: 0;
      `,1:o`
        order: 1;
      `,2:o`
        order: 2;
      `,3:o`
        order: 3;
      `,4:o`
        order: 4;
      `,5:o`
        order: 5;
      `},responsive:!0}},e=String.raw,w={flex:{options:{"0 1 auto":e`
        flex: 0 1 auto;
      `,"1 1 auto":e`
        flex: 1 1 auto;
      `,"1 0 auto":e`
        flex: 1 0 auto;
      `,"0 0 auto":e`
        flex: 0 0 auto;
      `,initial:e`
        flex: initial;
      `,auto:e`
        flex: auto;
      `},responsive:!0},direction:{options:{row:e`
        flex-direction: row;
      `,column:e`
        flex-direction: column;
      `,rowReverse:e`
        flex-direction: row-reverse;
      `,columnReverse:e`
        flex-direction: column-reverse;
      `},responsive:!0},wrap:{options:{nowrap:e`
        flex-wrap: nowrap;
      `,wrap:e`
        flex-wrap: wrap;
      `,wrapReverse:e`
        flex-wrap: wrap-reverse;
      `},responsive:!0},alignSelf:{options:{start:e`
        align-self: start;
      `,end:e`
        align-self: end;
      `,center:e`
        align-self: center;
      `,stretch:e`
        align-self: stretch;
      `},responsive:!0},justifySelf:{options:{start:e`
        justify-self: start;
      `,end:e`
        justify-self: end;
      `,center:e`
        justify-self: center;
      `,stretch:e`
        justify-self: stretch;
      `},responsive:!0},alignItems:{options:{stretch:e`
        align-items: stretch;
      `,center:e`
        align-items: center;
      `,start:e`
        align-items: start;
      `,end:e`
        align-items: end;
      `,baseline:e`
        align-items: baseline;
      `,initial:e`
        align-items: initial;
      `,inherit:e`
        align-items: inherit;
      `},responsive:!0},alignContent:{options:{stretch:e`
        align-content: stretch;
      `,center:e`
        align-content: center;
      `,start:e`
        align-content: start;
      `,end:e`
        align-content: end;
      `,baseline:e`
        align-content: baseline;
      `,initial:e`
        align-content: initial;
      `,inherit:e`
        align-content: inherit;
      `},responsive:!0},justifyContent:{options:{start:e`
        justify-content: start;
      `,end:e`
        justify-content: end;
      `,center:e`
        justify-content: center;
      `,spaceBetween:e`
        justify-content: space-between;
      `,spaceAround:e`
        justify-content: space-around;
      `,spaceEvenly:e`
        justify-content: space-evenly;
      `},responsive:!0},itemSize:{options:{full:e`
        grid-template-columns: minmax(0, 1fr);
      `,half:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-half)
          ),
          minmax(0, 1fr)
        );
      `,third:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-third)
          ),
          minmax(0, 1fr)
        );
      `,quarter:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-quarter)
          ),
          minmax(0, 1fr)
        );
      `,sixth:e`
        grid-template-columns: repeat(
          calc(
            var(--mox-container-grid-total-columns) /
              var(--mox-container-grid-columns-sixth)
          ),
          minmax(0, 1fr)
        );
      `},responsive:!0},gridColumn:{options:{window:e`
        --mox-page-grid-column: window;
      `,page:e`
        --mox-page-grid-column: page;
      `,span1:e`
        --mox-page-grid-column: span 1;
      `,span2:e`
        --mox-page-grid-column: span 2;
      `,span3:e`
        --mox-page-grid-column: span 3;
      `,span4:e`
        --mox-page-grid-column: span 4;
      `,span5:e`
        --mox-page-grid-column: span 5;
      `,span6:e`
        --mox-page-grid-column: span 6;
      `,span7:e`
        --mox-page-grid-column: span 7;
      `,span8:e`
        --mox-page-grid-column: span 8;
      `,span9:e`
        --mox-page-grid-column: span 9;
      `,span10:e`
        --mox-page-grid-column: span 10;
      `,span11:e`
        --mox-page-grid-column: span 11;
      `,span12:e`
        --mox-page-grid-column: span 12;
      `},responsive:!0},gridColumnStart:{options:{windowStart:e`
        --mox-page-grid-column-start: window-start;
      `,pageStart:e`
        --mox-page-grid-column-start: page-start;
      `,pageEnd:e`
        --mox-page-grid-column-start: page-end;
      `,windowEnd:e`
        --mox-page-grid-column-start: window-end;
      `,0:e`
        --mox-page-grid-column-start: 0;
      `,1:e`
        --mox-page-grid-column-start: 1;
      `,2:e`
        --mox-page-grid-column-start: 2;
      `,3:e`
        --mox-page-grid-column-start: 3;
      `,4:e`
        --mox-page-grid-column-start: 4;
      `,5:e`
        --mox-page-grid-column-start: 5;
      `,6:e`
        --mox-page-grid-column-start: 6;
      `,7:e`
        --mox-page-grid-column-start: 7;
      `,8:e`
        --mox-page-grid-column-start: 8;
      `,9:e`
        --mox-page-grid-column-start: 9;
      `,10:e`
        --mox-page-grid-column-start: 10;
      `,11:e`
        --mox-page-grid-column-start: 11;
      `,12:e`
        --mox-page-grid-column-start: 12;
      `,13:e`
        --mox-page-grid-column-start: 13;
      `},responsive:!0},gridColumnEnd:{options:{windowStart:e`
        --mox-page-grid-column-end: window-start;
      `,pageStart:e`
        --mox-page-grid-column-end: page-start;
      `,windowEnd:e`
        --mox-page-grid-column-end: window-end;
      `,pageEnd:e`
        --mox-page-grid-column-end: page-end;
      `,0:e`
        --mox-page-grid-column-end: 0;
      `,1:e`
        --mox-page-grid-column-end: 1;
      `,2:e`
        --mox-page-grid-column-end: 2;
      `,3:e`
        --mox-page-grid-column-end: 3;
      `,4:e`
        --mox-page-grid-column-end: 4;
      `,5:e`
        --mox-page-grid-column-end: 5;
      `,6:e`
        --mox-page-grid-column-end: 6;
      `,7:e`
        --mox-page-grid-column-end: 7;
      `,8:e`
        --mox-page-grid-column-end: 8;
      `,9:e`
        --mox-page-grid-column-end: 9;
      `,10:e`
        --mox-page-grid-column-end: 10;
      `,11:e`
        --mox-page-grid-column-end: 11;
      `,12:e`
        --mox-page-grid-column-end: 12;
      `,13:e`
        --mox-page-grid-column-end: 13;
      `},responsive:!0},gap:{options:{...t(i,["gap"],"space"),...s(l,["gap"])},responsive:!0},rowGap:{options:{...t(i,["row-gap"],"space"),...s(l,["row-gap"])},responsive:!0},columnGap:{options:{...t(i,["column-gap"],"space"),...s(l,["column-gap"])},responsive:!0},gridTemplateColumns:{options:{"1fr":e`
        grid-template-columns: 1fr;
      `,"1fr 1fr":e`
        grid-template-columns: 1fr 1fr;
      `,"auto 1fr":e`
        grid-template-columns: minmax(0, auto) 1fr;
      `,"1fr auto":e`
        grid-template-columns: 1fr minmax(0, auto);
      `,"auto 1fr 1fr":e`
        grid-template-columns: minmax(0, auto) 1fr 1fr;
      `,"1fr auto 1fr":e`
        grid-template-columns: 1fr minmax(0, auto) 1fr;
      `,"1fr 1fr auto":e`
        grid-template-columns: 1fr 1fr minmax(0, auto);
      `},responsive:!0},gridTemplateRows:{options:{"1fr":e`
        grid-template-rows: 1fr;
      `,"1fr 1fr":e`
        grid-template-rows: 1fr 1fr;
      `,"auto 1fr":e`
        grid-template-rows: minmax(0, auto) 1fr;
      `,"1fr auto":e`
        grid-template-rows: 1fr minmax(0, auto);
      `,"auto 1fr 1fr":e`
        grid-template-rows: minmax(0, auto) 1fr 1fr;
      `,"1fr auto 1fr":e`
        grid-template-rows: 1fr minmax(0, auto) 1fr;
      `,"1fr 1fr auto":e`
        grid-template-rows: 1fr 1fr minmax(0, auto);
      `},responsive:!0}},u=String.raw,k={underline:{options:{underline:u`
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      `,strikethrough:u`
        text-decoration: line-through;
      `,none:u`
        text-decoration: none;
      `}},underlineHover:{options:{underline:u`
        text-decoration-line: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      `,strikethrough:u`
        text-decoration: line-through;
      `,none:u`
        text-decoration: none;
      `},state:"hover"}},a=String.raw,S={fontSize:{options:i.reduce((r,n)=>(r[n]=a`
          --current-font-size: var(--mox-space-${n});
          font-size: var(--current-font-size);
        `,r),{}),responsive:!0},fontStyle:{options:{normal:a`
        font-style: normal;
      `,italic:a`
        font-style: italic;
      `}},color:{options:d.reduce((r,n)=>({...r,[n]:a`
          --mox-text-color: var(--mox-color-${n});
          color: var(--mox-text-color);
        `}),{})},colorHover:{options:d.reduce((r,n)=>({...r,[n]:a`
          --mox-text-color-hover: var(--mox-color-${n});
          color: var(--mox-text-color-hover);
        `}),{}),state:"hover"},fontWeight:{options:{light:a`
        font-weight: 300;
      `,normal:a`
        font-weight: 400;
      `,medium:a`
        font-weight: 500;
      `,bold:a`
        font-weight: 700;
      `}},lineHeight:{options:{normal:a`
        line-height: 1.5;
      `,tight:a`
        line-height: 1.3;
      `}},textAlign:{options:{start:a`
        text-align: start;
      `,center:a`
        text-align: center;
      `,end:a`
        text-align: end;
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
      `,contents:p`
        display: contents;
      `},responsive:!0}},$={mobile:600,tablet:900,desktop:1200,mq1440:1440},j={cq200:200,cq400:400,cq600:600,cq800:800},C={...w,...k,...S,...y,...z},E={prefix:"mox",viewportBreakpoints:$,containerBreakpoints:j,props:C};export{E as m};
