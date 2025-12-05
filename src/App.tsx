import React from "react";
import "./App.css";
import { MoxAtomBox, MoxBox } from "./moxReact/uiAtoms/layout/box";

function App() {
  const linkRef = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <>
      <MoxBox>Simple box (shorthand import for Atom-component)</MoxBox>
      <MoxAtomBox as="section" href="#">
        Section
      </MoxAtomBox>
      <MoxAtomBox as="a" href="#" ref={linkRef}>
        Link
      </MoxAtomBox>
    </>
  );
  return <div></div>;
}

export default App;
