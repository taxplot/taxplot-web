import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./src/style/theme";
import RootContext from "./src/components/RootContext"


export const wrapRootElement = ({ element }) => (
  <RootContext>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </RootContext>
);
