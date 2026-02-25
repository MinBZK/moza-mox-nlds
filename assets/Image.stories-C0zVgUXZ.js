import{j as n}from"./iframe-BVTeWQ9T.js";import{g as s}from"./getStylePropArgTypes-BW479ZKl.js";import{M as a,r as t,i as m}from"./logo-rijksoverheid-D2Pzbk2C.js";import"./preload-helper-Blwmkukt.js";import"./mox.config-CFm5mF-x.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-ChSwfNU6.js";const k={title:"React/Atoms/Media/Image",component:a,tags:["autodocs"],parameters:{},argTypes:{children:{table:{disable:!0}},...s(m)}},e={args:{src:t,alt:"Rijkslint"}},i=r=>n.jsx("img",{...r,style:{border:"2px solid red",...r.style}}),o={args:{as:i,src:t,alt:"Rijkslint"},parameters:{docs:{description:{story:'Je kan via de \'as\' prop een ander element dan \'img\' gebruiken. Dit is handig voor als je bijvoorbeeld met NextJS werkt, wat een eigen `Image` component heeft. Hier simuleren we een custom `Image` component dat een rode border heeft:\n```tsx\nconst CustomImageComponent = (props: React.ComponentPropsWithoutRef<"img">) => {\n  return <img {...props} style={{ border: "2px solid red", ...props.style }} />;\n};\n\n<MoxImage as={CustomImageComponent} src={rijkslint} alt="Rijkslint" />\n```\n\nLet trouwens op bij NextJS: een image zonder `src` zal een error gooien, dus zorg voor een `ErrorBoundary` of andere checks zodra je andere componenten meegeeft als `as` prop.\n          '}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const C=["Default","AsCustomImageComponent"];export{o as AsCustomImageComponent,e as Default,C as __namedExportsOrder,k as default};
