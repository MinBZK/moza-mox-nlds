import{j as e}from"./iframe-BcPoELSs.js";import{g as l}from"./getConstructionSummary-DrEN36m4.js";import"./Box-BM8JuPYo.js";import"./Shelf-0Wp1cuXC.js";import{a as i}from"./Stack-BxoP_6xT.js";import"./PageGrid-Cs9jnZyG.js";import"./ContainerGrid-CdFWyybQ.js";import"./Grid-BjomE46p.js";import"./GridItem-CZqVC8b1.js";import"./Occupy-DZqNVjEf.js";import"./Pile-BJlwvum7.js";import"./Heading-DnUubVwq.js";import"./TextBlock-Dr_CEeVM.js";import"./Paragraph-CrRU6AWd.js";import"./PageLead-D0bWmtd0.js";import"./Link-BzHF_IJe.js";import{a as o}from"./Icon-RsAXDneL.js";import"./Image-RZnAOoM-.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-Dtnwl8Zl.js";import"./RadioButton-Bv5BUXaD.js";import{M as p}from"./SideNavLink-CMNDswCf.js";import{M as n}from"./Badge-DZ4U3gSh.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const s=({items:t,...m})=>e.jsx(i,{as:"nav",rowGap:"xs","aria-labelledby":"main-menu-title",...m,children:t.map((c,d)=>e.jsx(i,{as:"ul",rowGap:"4xs",children:c.map(r=>e.jsx("li",{children:e.jsx(p,{iconSlot:r.icon,badgeSlot:r.badge,href:r.href,isCurrent:r.isCurrent,children:r.label})},r.href))},d))});s.__docgenInfo={description:"",methods:[],displayName:"MoxSideNav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: React.ReactNode;
  isCurrent?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"badge",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"isCurrent",value:{name:"boolean",required:!1}}]}}],raw:"Array<SideNavItem>"}],raw:"Array<Array<SideNavItem>>"},description:""}}};const L={title:"React/Components/SideNav/SideNav",component:s,tags:["autodocs"],parameters:{docs:{description:{story:l(`
          
        `)}}},decorators:[t=>e.jsxs("div",{children:[e.jsx("style",{children:`
          section { 
            border: 2px dotted orange;
            inline-size: 300px;
            padding: 8px;
          }
        `}),e.jsx("section",{children:e.jsx(t,{})})]})],argTypes:{},args:{}},u=[[{label:"Home",href:"#",isCurrent:!0,icon:e.jsx(o,{icon:"HouseFill",fontSize:"md"}),badge:e.jsx(n,{backgroundColor:"danger",children:"3"})},{label:"Profile",href:"#",icon:e.jsx(o,{icon:"PersonFill",fontSize:"md"})}],[{label:"Settings",href:"#",icon:e.jsx(o,{icon:"GearFill",fontSize:"md"})},{label:"Help",href:"#",icon:e.jsx(o,{icon:"QuestionCircleFill",fontSize:"md"}),badge:e.jsx(n,{backgroundColor:"primary",children:"New"})}],[{label:"Logout",href:"#",icon:e.jsx(o,{icon:"BoxArrowRight",fontSize:"md"})}]],a={args:{items:u}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: mock
  }
}`,...a.parameters?.docs?.source}}};const P=["Default"];export{a as Default,P as __namedExportsOrder,L as default};
