import{j as t}from"./iframe-BcPoELSs.js";import{g as e}from"./getConstructionSummary-DrEN36m4.js";import{M as s}from"./SideNavLink-CMNDswCf.js";import"./Box-BM8JuPYo.js";import"./Shelf-0Wp1cuXC.js";import"./Stack-BxoP_6xT.js";import"./PageGrid-Cs9jnZyG.js";import"./ContainerGrid-CdFWyybQ.js";import"./Grid-BjomE46p.js";import"./GridItem-CZqVC8b1.js";import"./Occupy-DZqNVjEf.js";import"./Pile-BJlwvum7.js";import"./Heading-DnUubVwq.js";import"./TextBlock-Dr_CEeVM.js";import"./Paragraph-CrRU6AWd.js";import"./PageLead-D0bWmtd0.js";import"./Link-BzHF_IJe.js";import{a as n}from"./Icon-RsAXDneL.js";import"./Image-RZnAOoM-.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-Dtnwl8Zl.js";import"./RadioButton-Bv5BUXaD.js";import{M as i}from"./Badge-DZ4U3gSh.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const N={title:"React/Components/SideNav/SideNavLink",component:s,tags:["autodocs"],parameters:{docs:{description:{story:e(`
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
