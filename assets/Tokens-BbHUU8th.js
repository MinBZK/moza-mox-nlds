import{j as e}from"./iframe-CGG6nPh5.js";import{useMDXComponents as s}from"./index-DGxN2w8R.js";import{M as t}from"./blocks-BGB7W3n5.js";import"./preload-helper-Blwmkukt.js";import"./index-CuBQtTVa.js";function o(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Design tokens"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"design-tokens",children:"Design tokens"}),e.jsx(n.p,{children:`Een probleem met bestaande NLDS-implementaties is de wildgroei aan tokens. Design-tokens zijn echter handig om een huisstijl in te defineren.
Aangezien elk component in MOX-nlds opgebouwd is uit Atoms, is er voor gekozen om de Atoms aanpasbaar te maken met design-tokens.`}),e.jsx(n.h2,{id:"onderverdeling-tokens",children:"Onderverdeling tokens"}),e.jsx(n.p,{children:"In andere NLDS-implementaties zijn er 3 levels van tokens:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Brand tokens: de huisstijl, basis-instellingen zoals een ",e.jsx(n.strong,{children:"default font-size"})]}),`
`,e.jsxs(n.li,{children:["Common tokens: semantische betekenis bij tokens, zoals de ",e.jsx(n.strong,{children:"default font-size voor buttons"})]}),`
`,e.jsxs(n.li,{children:["Component tokens: een grote lijst met component-specifieke tokens, zoals ",e.jsx(n.strong,{children:"de font-size op de heading-button van accordions"})]}),`
`]}),e.jsxs(n.p,{children:["In MOX-nlds gebruiken we de laatste laag expliciet ",e.jsx(n.em,{children:"niet"}),". Twee redenen:"]}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Een hoop tokens geven de mogelijkheid om van de Rijkshuisstijl af te wijken, bv door een ander font in een accordion te gebruiken. Dit is niet gewenst."}),`
`,e.jsxs(n.li,{children:["Tegelijkertijd mis je vaak de tokens die je wel nodig hebt voor layout-invloed (bv een optie voor CSS-waardes voor ",e.jsx(n.code,{children:"display"}),", ",e.jsx(n.code,{children:"order"}),", ",e.jsx(n.code,{children:"flex"}),", etc)."]}),`
`]}),e.jsx(n.h2,{id:"opzet-tokens-in-json",children:"Opzet tokens in json"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "brand/color": {
    "mox": {
      "color": {
        "lintblauw": {
          "50": {
            "$type": "color",
            "$value": "#dce3ea",
            "$description": "Lintblauw 15%"
          },
          "100": {
            "$type": "color",
            "$value": "#b8c6d5",
            "$description": "Lintblauw 30%"
          },
          ...
`})}),e.jsxs(n.p,{children:["Alles zit in een folder om dingen makkelijk terug te vinden in Figma - Tokens Studio. De folders zijn geprefixed met ",e.jsx(n.code,{children:"brand"})," of ",e.jsx(n.code,{children:"common"})," (we hebben zoals gezegd geen ",e.jsx(n.code,{children:"component"})," tokens)"]}),e.jsx(n.p,{children:"Dit wordt omgezet in CSS-variables:"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`:root {
  --mox-color-lintblauw-50: #dce3ea; /** Lintblauw 15% */
  --mox-color-lintblauw-100: #b8c6d5; /** Lintblauw 30% */
  --mox-color-lintblauw-200: #95a9c0; /** Lintblauw 45% */
  ...
}
`})})]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{})})]})}function j(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{j as default};
