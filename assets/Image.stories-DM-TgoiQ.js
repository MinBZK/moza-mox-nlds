import{j as n}from"./iframe-BcPoELSs.js";import{g as s}from"./getStylePropArgTypes-N8gvkMTA.js";import{M as a,i as m}from"./Image-RZnAOoM-.js";import{r as t}from"./logo-rijksoverheid-CFhMabaa.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-C5hDLZc_.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const C={title:"React/Atoms/Media/Image",component:a,tags:["autodocs"],parameters:{},argTypes:{children:{table:{disable:!0}},...s(m)}},e={args:{src:t,alt:"Rijkslint"}},i=r=>n.jsx("img",{...r,style:{border:"2px solid red",...r.style}}),o={args:{as:i,src:t,alt:"Rijkslint"},parameters:{docs:{description:{story:'Je kan via de \'as\' prop een ander element dan \'img\' gebruiken. Dit is handig voor als je bijvoorbeeld met NextJS werkt, wat een eigen `Image` component heeft. Hier simuleren we een custom `Image` component dat een rode border heeft:\n```tsx\nconst CustomImageComponent = (props: React.ComponentPropsWithoutRef<"img">) => {\n  return <img {...props} style={{ border: "2px solid red", ...props.style }} />;\n};\n\n<MoxImage as={CustomImageComponent} src={rijkslint} alt="Rijkslint" />\n```\n\nLet trouwens op bij NextJS: een image zonder `src` zal een error gooien, dus zorg voor een `ErrorBoundary` of andere checks zodra je andere componenten meegeeft als `as` prop.\n          '}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: rijkslint,
    alt: "Rijkslint"
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    as: CustomImageComponent,
    src: rijkslint,
    alt: "Rijkslint"
  },
  parameters: {
    docs: {
      description: {
        story: \`Je kan via de 'as' prop een ander element dan 'img' gebruiken. Dit is handig voor als je bijvoorbeeld met NextJS werkt, wat een eigen \\\`Image\\\` component heeft. Hier simuleren we een custom \\\`Image\\\` component dat een rode border heeft:
\\\`\\\`\\\`tsx
const CustomImageComponent = (props: React.ComponentPropsWithoutRef<"img">) => {
  return <img {...props} style={{ border: "2px solid red", ...props.style }} />;
};

<MoxImage as={CustomImageComponent} src={rijkslint} alt="Rijkslint" />
\\\`\\\`\\\`

Let trouwens op bij NextJS: een image zonder \\\`src\\\` zal een error gooien, dus zorg voor een \\\`ErrorBoundary\\\` of andere checks zodra je andere componenten meegeeft als \\\`as\\\` prop.
          \`
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","AsCustomImageComponent"];export{o as AsCustomImageComponent,e as Default,f as __namedExportsOrder,C as default};
