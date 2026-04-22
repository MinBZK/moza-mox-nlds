import{j as t}from"./iframe-BXcaScTf.js";import{g as e}from"./getConstructionSummary-DrEN36m4.js";import{M as s}from"./SideNavLink-BBpAQPPJ.js";import"./Box-BQ-MJ668.js";import"./Shelf-CrDUUlYN.js";import"./Stack-CYvcPFjw.js";import"./PageGrid-DcA_h2zh.js";import"./ContainerGrid-C64d9TwZ.js";import"./Grid-k3bV3_Sz.js";import"./GridItem-CSpKzZX8.js";import"./Occupy-D9tWf_w2.js";import"./Pile-DxWXw0N0.js";import"./Heading-ClL3j_OA.js";import"./TextBlock-B-N-zLst.js";import"./Paragraph-DVsDNpSW.js";import"./PageLead-Bux00zzC.js";import"./Link-BgPmj3pV.js";import{a as n}from"./Icon-PFGhI-5u.js";import"./Image-Ce6CQz0i.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-TaWyobOR.js";import"./RadioButton-CXuknI33.js";import{M as i}from"./Badge-DEJU7Uex.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const N={title:"React/Components/SideNav/SideNavLink",component:s,tags:["autodocs"],parameters:{docs:{description:{story:e(`
          <MoxAtomLink {...props} color={isCurrent ? "primary" : "plain"}>
                <MoxBox
                  backgroundColor={isCurrent ? "primary-subtle-2" : "transparent"}
                  backgroundColorHover={
                    isCurrent ? "primary-subtle-2" : "neutral-subtle-2"
                  }
                  backgroundColorActive={
                    isCurrent ? "primary-subtle-2" : "neutral-subtle"
                  }
                  padding="xs"
                  borderRadius="8px"
                >
                  <MoxShelf columnGap="xs" alignItems={"start"}>
                    <MoxOccupy
                      blockSize="xs"
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      {iconSlot}
                    </MoxOccupy>
                    <MoxShelf
                      columnGap="xs"
                      alignItems={"start"}
                      justifyContent={"spaceBetween"}
                    >
                      <MoxTextBlock fontWeight={isCurrent ? "bold" : "normal"}>
                        {children}
                      </MoxTextBlock>
                      <MoxOccupy
                        blockSize="xs"
                        alignContent={"center"}
                        justifyContent={"center"}
                      >
                        {badgeSlot}
                      </MoxOccupy>
                    </MoxShelf>
                  </MoxShelf>
                </MoxBox>
              </MoxAtomLink>
        `)}}},argTypes:{},args:{children:"Home",iconSlot:t.jsx(n,{icon:"HouseFill",fontSize:"md"}),badgeSlot:t.jsx(i,{backgroundColor:"danger",children:"3"})}},r={args:{isCurrent:!1}},o={args:{isCurrent:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isCurrent: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    isCurrent: true
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","IsCurrent"];export{r as Default,o as IsCurrent,R as __namedExportsOrder,N as default};
