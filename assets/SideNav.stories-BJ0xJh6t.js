import{j as e}from"./iframe-BXcaScTf.js";import{g as l}from"./getConstructionSummary-DrEN36m4.js";import"./Box-BQ-MJ668.js";import"./Shelf-CrDUUlYN.js";import{a as i}from"./Stack-CYvcPFjw.js";import"./PageGrid-DcA_h2zh.js";import"./ContainerGrid-C64d9TwZ.js";import"./Grid-k3bV3_Sz.js";import"./GridItem-CSpKzZX8.js";import"./Occupy-D9tWf_w2.js";import"./Pile-DxWXw0N0.js";import"./Heading-ClL3j_OA.js";import"./TextBlock-B-N-zLst.js";import"./Paragraph-DVsDNpSW.js";import"./PageLead-Bux00zzC.js";import"./Link-BgPmj3pV.js";import{a as o}from"./Icon-PFGhI-5u.js";import"./Image-Ce6CQz0i.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-TaWyobOR.js";import"./RadioButton-CXuknI33.js";import{M as p}from"./SideNavLink-BBpAQPPJ.js";import{M as n}from"./Badge-DEJU7Uex.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const s=({items:t,...m})=>e.jsx(i,{as:"nav",rowGap:"xs","aria-labelledby":"main-menu-title",...m,children:t.map((c,d)=>e.jsx(i,{as:"ul",rowGap:"4xs",children:c.map(r=>e.jsx("li",{children:e.jsx(p,{iconSlot:r.icon,badgeSlot:r.badge,href:r.href,isCurrent:r.isCurrent,children:r.label})},r.href))},d))});s.__docgenInfo={description:"",methods:[],displayName:"MoxSideNav",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
