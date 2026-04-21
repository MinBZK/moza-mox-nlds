import{j as d}from"./iframe-BcPoELSs.js";import{c as p}from"./clsx-B-dksMZM.js";import{p as m}from"./propsToClassNames-CYgz3h9B.js";const l=["itemSize","gap","rowGap","columnGap","flex"],c=({children:e,as:n,className:r,ref:i,...t})=>{const o=n||"div",{stylePropClassNames:a,restProps:s}=m(l,t);return d.jsx(o,{ref:i,className:p("mox-container-grid",...a,r),...s,children:e})};c.__docgenInfo={description:`Container grid component.
Werkt zoals de page-grid, maar dit wordt gebruikt om een pagina handig in responsive \`columns\` te splitsen.
Wezenlijk verschil met de page-grid is dat dit niet de zijruimte van de pagina corrigeert; deze grid vult altijd de complete ruimte op.
Verder baseert de container-grid zijn breakpoints op @container-queries. Een page-grid gebruikt @media queries.
Ook is dit een grid wat beter geschikt is voor herhalende content, zoals Cards, die mogelijk moeten 'wrappen' op een nieuwe regel.

Een page-grid zet een container-type, dus als je dit grid gebruikt binnen een page-grid gebruikt hij dat als referentie voor de container-grootte.

Gebruikt de property \`itemSize\` om te bepalen welke verdeling van de beschikbare kolommen (12 bij een desktop scherm) je wilt.

Verantwoordelijkheden:
1. Verdeel de beschikbare ruimte in kolommen, afhankelijk van de container-grootte.`,methods:[],displayName:"MoxAtomContainerGrid",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{c as M,l as c};
