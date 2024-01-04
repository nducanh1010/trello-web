import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
/**
 *  Create a theme instance. override the default themeof MUI
 * extend theme is an migrating from MUI V5 which prevent flickering SSR from older version,
 *  getInitColorSchemeScript () use for Nextjs
 * providing colorScheme hook to handle dark and light mode
 */

const theme = extendTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "0.875rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({ color: theme.palette.primary.main }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& fieldset": {
              borderWidth: "1px !important", // set border color cuẩ input
            },
          };
        },
      },
    },
  },
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
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
