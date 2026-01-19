import React from "react";
import "./moxCss/index.css";
import "./moxCss/tokens.css";
import { MoxShelf } from "./moxReact/uiAtoms/layout/Shelf";
import { MoxBox, MoxAtomBox } from "./moxReact/uiAtoms/layout/Box";
import { MoxPageGrid, MoxTextBlock } from "./moxReact/uiAtoms";
import { MoxGridItem } from "./moxReact/uiAtoms/layout/GridItem";
import { MoxContainerGrid } from "./moxReact/uiAtoms/layout/ContainerGrid";

const Comp = ({ foo }: { foo: string }) => <div>{foo}</div>;

const App = () => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <>
      <MoxPageGrid>
        <MoxBox backgroundColor="primary-subtle-hover" padding="lg">
          <MoxTextBlock>Some content</MoxTextBlock>
        </MoxBox>
      </MoxPageGrid>
      <MoxPageGrid>
        <MoxBox backgroundColor="primary" padding="lg">
          <MoxTextBlock>Some content</MoxTextBlock>
        </MoxBox>
      </MoxPageGrid>
      <MoxPageGrid>
        <MoxGridItem gridColumnStart="windowStart">
          <MoxBox backgroundColor="primary" padding="lg">
            <MoxTextBlock>Some content</MoxTextBlock>
          </MoxBox>
        </MoxGridItem>
      </MoxPageGrid>
      <MoxPageGrid>
        <MoxContainerGrid itemSize="third">
          <MoxBox backgroundColor="primary-subtle" padding="lg">
            <MoxTextBlock>Some content in third</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="primary-subtle" padding="lg">
            <MoxTextBlock>Some content in third</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="primary-subtle" padding="lg">
            <MoxTextBlock>Some content in third</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="primary-subtle" padding="lg">
            <MoxTextBlock>Some content in third</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="primary-subtle" padding="lg">
            <MoxTextBlock>Some content in third</MoxTextBlock>
          </MoxBox>
        </MoxContainerGrid>
      </MoxPageGrid>

      <MoxPageGrid>
        <MoxContainerGrid itemSize="sixth">
          <MoxBox backgroundColor="secondary-subtle" padding="lg">
            <MoxTextBlock>Some content in sixth</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="secondary-subtle" padding="lg">
            <MoxTextBlock>Some content in sixth</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="secondary-subtle" padding="lg">
            <MoxTextBlock>Some content in sixth</MoxTextBlock>
          </MoxBox>
          <MoxGridItem gridColumn={{ cq600Min: "span3" }}>
            <MoxBox backgroundColor="secondary-subtle" padding="lg">
              <MoxTextBlock>Some content in sixth</MoxTextBlock>
            </MoxBox>
          </MoxGridItem>
          <MoxBox backgroundColor="secondary-subtle" padding="lg">
            <MoxTextBlock>Some content in sixth</MoxTextBlock>
          </MoxBox>
          <MoxBox backgroundColor="secondary-subtle" padding="lg">
            <MoxTextBlock>Some content in sixth</MoxTextBlock>
          </MoxBox>
        </MoxContainerGrid>
      </MoxPageGrid>

      <MoxShelf gap="2xl">
        <p>Click there</p>
        <button
          onClick={() => console.log("dfsj")}
          className="button-min-touch"
        >
          Click me
        </button>
      </MoxShelf>

      <MoxBox>Simple box (shorthand import for Atom-component)</MoxBox>
      <MoxAtomBox as="section" href="#">
        Section
      </MoxAtomBox>
      <MoxAtomBox as="a" href="#" foo="1" ref={linkRef}>
        Link
      </MoxAtomBox>
      <MoxAtomBox
        inlineSize={{ mobileMax: "md" }}
        blockSize="md"
        bloep="23"
        as={Comp}
        foo="foo-value"
        ref={linkRef}
      />
    </>
  );
  return <div></div>;
};

export default App;
