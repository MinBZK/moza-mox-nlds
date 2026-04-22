import{j as t}from"./iframe-CGG6nPh5.js";import{g as e}from"./getConstructionSummary-DrEN36m4.js";import{M as s}from"./SideNavLink-CJ6TTYvB.js";import"./Box-Cd5Wmavo.js";import"./Shelf-Fdc1gkXa.js";import"./Stack--3Kb3a2s.js";import"./PageGrid-BIJzhobj.js";import"./ContainerGrid-ClaKLKKA.js";import"./Grid-CPtsD8we.js";import"./GridItem-Yg82cn6D.js";import"./Occupy-DjASBCOg.js";import"./Pile-CeqL2Rxo.js";import"./Heading-kEIYXY4_.js";import"./TextBlock-aPMfiSqF.js";import"./Paragraph-BCBjiJN9.js";import"./PageLead-D2KR66as.js";import"./Link-Bj8s4BO6.js";import{a as n}from"./Icon-D8C6kZWE.js";import"./Image-B4lB_6jn.js";import"./mox.config-C5hDLZc_.js";import"./Checkbox-FximnMh8.js";import"./RadioButton-Cj1Rm8U1.js";import{M as i}from"./Badge-C9XSIv99.js";import"./preload-helper-Blwmkukt.js";import"./clsx-B-dksMZM.js";import"./propsToClassNames-CYgz3h9B.js";const N={title:"React/Components/SideNav/SideNavLink",component:s,tags:["autodocs"],parameters:{docs:{description:{story:e(`
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
