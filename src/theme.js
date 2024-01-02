import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
/**
 *  Create a theme instance. override the default themeof MUI
 * extend theme is an migrating from MUI V5 which prevent flickering SSR from older version,
 *  getInitColorSchemeScript () use for Nextjs
 * providing colorScheme hook to handle dark and light mode
 */

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  // ...other properties
});

export default theme;
