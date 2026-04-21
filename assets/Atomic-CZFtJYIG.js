import{j as e}from"./iframe-B2AZB9RS.js";import{useMDXComponents as i}from"./index-DljM89Qt.js";import{M as t}from"./blocks-BV3P0jX8.js";import"./preload-helper-Blwmkukt.js";import"./index-WKXhdyVi.js";const l="/moza-mox-nlds/assets/atomic-design-system-moZ-3hAD.png",d="/moza-mox-nlds/assets/tokens-atoms-etc-aT-pMjYS.png";function o(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Atomic system"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(n.h1,{id:"atomic-system",children:"Atomic system"}),e.jsx(n.p,{children:"In een atomisch systeem zijn alle onderdelen onder de verdelen in een hierarchische structuur, in mate van complexiteit:"}),e.jsx("img",{src:l,alt:"Opbouw van een atomic design system"}),e.jsx(n.p,{children:"Kort gezegd betekent dit:"}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Atoms: dit zijn de kleinste bouwblokjes mogelijk"}),`
`,e.jsx(n.li,{children:"Molecules: deze zijn opgebouwd uit atoms"}),`
`,e.jsx(n.li,{children:"Organisms: opgebouwd uit molecules (en evt. atoms)"}),`
`]}),e.jsx(n.p,{children:"Molecules en Organisms zijn een onderscheid waar we voor MOX-nlds niet direct toegevoegde waarde zien. We voegen deze samen tot 1 groep, waardoor we onze onderverdeling krijgen:"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Atoms"}),": kleinste bouwblokjes, leunen op design-tokens"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Components"}),`: complexer, opgebouwd uit atoms, gebruiken geen design-tokens
()`]}),`
`]}),e.jsx(n.p,{children:"Voor een Design System dat potentieel door een brede gebruikersgroep gebruikt moet worden is dit handig."}),e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sommige mensen willen snel een standaard pagina op kunnen zetten, en kunnen simpelweg een template gebruiken, of het via standaard componenten opzetten."}),`
`,e.jsx(n.li,{children:"Anderen willen juist controle hebben en componenten kunnen aanpassen op detail-niveau; zij hebben controle nodig en kunnen via atoms snel hun eigen custom component opzetten als de default niet volstaat."}),`
`,e.jsx(n.li,{children:"... en iedereen die daar tussen valt"}),`
`]}),e.jsxs(n.p,{children:["Met een atomic design system kan je de uitgebreide ",e.jsx(n.code,{children:"organisms"})," of zelfs ",e.jsx(n.code,{children:"templates"}),` gebruiken om snel een pagina op te zetten.
Maar je kan ook `,e.jsx(n.code,{children:"organisms"})," of ",e.jsx(n.code,{children:"molecules"})," afpellen tot de ",e.jsx(n.code,{children:"atoms"}),` voor volledige aanpasbaarheid.
Iedereen kan via `,e.jsx(n.code,{children:"design tokens"}),` een eigen huisstijl toepassen, binnen de grenzen van de Rijkshuisstijl.
Het Mox Design system is een poging om aan de wensen van een brede gebruikersgroep te voldoen.`]}),e.jsx(n.h2,{id:"bouwblokken-van-het-atomic-system",children:"Bouwblokken van het atomic system"}),e.jsxs(n.p,{children:["React ",e.jsx(n.strong,{children:"Atom"})," componenten gebruiken de CSS ",e.jsx(n.strong,{children:"Atom"})," classNames. De volgorde is dus zo:"]}),e.jsx("img",{src:d,alt:"Autocomplete door TS",style:{maxInlineSize:"300px"}}),e.jsx(n.p,{children:"Boven dit"}),e.jsx(n.h3,{id:"lv-0---tokens-css",children:"lv. 0 - Tokens (CSS)"}),e.jsx(n.p,{children:"In de basis kan je via tokens je brandp-colors/spacing opties instellen voor een unieke huisstijl (of je gebruikt een standaard set tokens)"}),e.jsx(n.h3,{id:"lv-1---atoms-css--react-components",children:"lv. 1 - Atoms (CSS / React components)"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Atoms"})," zijn de kleinste bouwblokjes van het design-systeem."]}),e.jsx(n.p,{children:"Er zijn zowel Atoms voor CSS als voor React. De React componenten gebruiken de CSS classes."}),e.jsx(n.h4,{id:"beloftes",children:"Beloftes"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Er zullen altijd uitzonderingen zijn, maar in principe kan je met ",e.jsx(n.strong,{children:"atoms"})," bijna alle grotere componenten opbouwen"]}),`
`,e.jsxs(n.li,{children:["De styling wordt altijd gedaan via CSS (zie de ",e.jsx(n.code,{children:"Mox-css atoms"}),")"]}),`
`,e.jsxs(n.li,{children:["Uitgebreide aanpasbaarheid qua styling via ",e.jsx(n.code,{children:"design tokens"})]}),`
`,e.jsxs(n.li,{children:["Consistente API tussen alle ",e.jsx(n.code,{children:"atom"})," componenten:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"as"}),", ",e.jsx(n.code,{children:"ref"}),", ",e.jsx(n.code,{children:"className"})," en ",e.jsx(n.code,{children:"styling"})," props"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"})," of ",e.jsx(n.code,{children:"margin"})," (gebruik altijd layout-componenten zoals ",e.jsx(n.code,{children:"stack"})," of ",e.jsx(n.code,{children:"box"})," om de spaces tussen elementen te bepalen)"]}),`
`,e.jsx(n.li,{children:"Atoms zullen bijna nooit breaking changes hebben bij updates"}),`
`]}),e.jsx(n.h3,{id:"lv-2---components-react-components",children:"lv. 2 - Components (React components)"}),e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Components"})," zijn opgebouwd uit ",e.jsx(n.strong,{children:"atoms"})," en zijn daardoor complexer. Ook kan er interactiviteit in voorkomen (bv bij tabs)."]}),e.jsx(n.h4,{id:"beloftes-1",children:"Beloftes"}),e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Geen"})," ",e.jsx(n.code,{children:"design tokens"})]}),`
`,e.jsx(n.li,{children:"Aanpasbaarheid door de API van het component zelf"}),`
`,e.jsxs(n.li,{children:["Docs over hoe het opgebouwd is (welke ",e.jsx(n.strong,{children:"atoms"}),"), zodat je zelf makkelijk het kan nabouwen met ",e.jsx(n.strong,{children:"atoms"})," voor volledige aanpasbaarheid"]}),`
`,e.jsxs(n.li,{children:["Anders dan ",e.jsx(n.strong,{children:"atoms"})," kunnen hier sneller breaking changes in voorkomen"]}),`
`,e.jsxs(n.li,{children:["Nooit omringende spacing zoals ",e.jsx(n.code,{children:"padding"}),", ",e.jsx(n.code,{children:"margin"})," of (text-box ruimte)[?path=/docs/moxcss-text-box-trim--docs]."]}),`
`]})]})})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{j as default};
