import{j as t}from"./iframe-CKt61RK6.js";import{g as e}from"./getConstructionSummary-DrEN36m4.js";import{M as s}from"./SideNavLink-7oBLauUp.js";import"./Box-BuveiUcz.js";import"./Shelf-BDqoOOud.js";import"./Stack-gtUkitUm.js";import"./PageGrid-CZsKtxlB.js";import"./ContainerGrid-BOOEMV6t.js";import"./Grid-CrPIMbBs.js";import"./GridItem-8kXK9A7l.js";import"./Occupy-Bsgt76ET.js";import"./Pile-CwcIgXbh.js";import"./Heading-oNb5iSji.js";import"./TextBlock-CZgIch9-.js";import"./Paragraph-lYJm9l9K.js";import"./PageLead-B6D0_-TK.js";import"./Link-CG67pkw-.js";import{a as n}from"./Icon-BMw6ZJ0b.js";import"./Image-BwitdSkf.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-GPHDfr9N.js";import"./RadioButton-iwC7id-J.js";import{M as i}from"./Badge-BsXltLgq.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const N={title:"React/Components/SideNav/SideNavLink",component:s,tags:["autodocs"],parameters:{docs:{description:{story:e(`
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
