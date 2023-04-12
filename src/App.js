// App.js
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./components/utils/useOnClickOutside";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { BurgerIcon } from "./components/Burger/BurgerIcon";
import { SideMenu } from "./components/Menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
        </div>
        <div ref={node}>
          <BurgerIcon setOpen={setOpen} />
          <SideMenu open={open} setOpen={setOpen} />
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;
