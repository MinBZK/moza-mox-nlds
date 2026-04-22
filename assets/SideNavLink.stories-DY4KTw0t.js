import{j as t}from"./iframe-B2AZB9RS.js";import{g as e}from"./getConstructionSummary-DrEN36m4.js";import{M as s}from"./SideNavLink-MhwcuuFJ.js";import"./Box-BaR_jUA8.js";import"./Shelf-CFDc6-Ih.js";import"./Stack-Bwjt5Hqj.js";import"./PageGrid-CCzjwNgN.js";import"./ContainerGrid-CFby2l1f.js";import"./Grid-Cl1QxWJA.js";import"./GridItem-BfT0tAcu.js";import"./Occupy-C-HLHXRk.js";import"./Pile-CQvLc2tQ.js";import"./Heading-DOA4O1i6.js";import"./TextBlock-B7VHC5KE.js";import"./Paragraph-C-D6Xz5K.js";import"./PageLead-W3vUtwQ2.js";import"./Link-DBzaD5zU.js";import{a as n}from"./Icon-BskgF4qQ.js";import"./Image-CEenKvqs.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-xHSKR3px.js";import"./RadioButton-CusKIrpx.js";import{M as i}from"./Badge-bkJcRPHV.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const N={title:"React/Components/SideNav/SideNavLink",component:s,tags:["autodocs"],parameters:{docs:{description:{story:e(`
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
