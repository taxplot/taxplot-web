import React, { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../style/theme";
import Appbar from "../components/Appbar";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import "../style/layout.css";


import { GlobalContext } from "./RootContext"


export default ({ elevateAppBar = true, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const prezMode = React.useContext(GlobalContext)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!prezMode.prezMode && <Appbar
        onToggleDrawer={handleToggleDrawer}
        elevation={Number(elevateAppBar)}
      /> }
      {children}
      {!prezMode.prezMode && <Footer /> }
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer} />
    </ThemeProvider>
  );
};
