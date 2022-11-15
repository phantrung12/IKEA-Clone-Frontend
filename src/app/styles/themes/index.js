import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, StyledEngineProvider } from "@mui/material";
import { useMemo } from "react";

import typography from "./typography";
import palette from "./palette";

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      typography,
      palette,
    }),
    []
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
