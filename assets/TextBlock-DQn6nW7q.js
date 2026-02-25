import{j as p}from"./iframe-BVTeWQ9T.js";import{c}from"./clsx-B-dksMZM.js";import{p as m}from"./propsToClassNames-ChSwfNU6.js";const d=["color","fontSize","fontStyle","fontWeight","lineHeight","underline","underlineHover"],e=({children:t,as:n,className:o,ref:s,...i})=>{const a=n||"span",{stylePropClassNames:r,restProps:l}=m(d,i);return p.jsx(a,{ref:s,...l,className:c("mox-text-block",r,o),children:t})},h=e;e.__docgenInfo={description:`A text component to be used for any text content.
This element will have it's half-leading on the top/bottom trimmed to fit snugly in designs (e.g. placing it in a \`<Shelf>\` next to an Icon will align them perfectly at the top). See the orange border on the default component.

Responsibilities:
1. Render text content with appropriate semantics (via \`as\` prop).
2. Apply font-size styling via classNames.

Not responsible for:
1. Managing text-specific behavior (e.g., truncation, wrapping)`,methods:[],displayName:"MoxAtomTextBlock",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"T"},description:""},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ElementFromElementType<T>>",elements:[{name:"unknown"}]},description:""}}};export{h as M,e as a,d as t};
