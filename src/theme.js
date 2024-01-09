import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
/**
 *  Create a theme instance. override the default themeof MUI
 * extend theme is an migrating from MUI V5 which prevent flickering SSR from older version,
 *  getInitColorSchemeScript () use for Nextjs
 * providing colorScheme hook to handle dark and light mode
 */

const theme = extendTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": {
            borderWidth: "0.5px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          "& fieldset": {
            borderWidth: "0.5px !important", // set border color cuẩ input
          },
          "&:hover fieldset": {
            borderWidth: "1px !important", // set border color cuẩ input
          },
          "&.Mui-focused fieldset": {
            borderWidth: "1px !important", // set border color cuẩ input
          },
        },
      },
    },
  },
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
  },
  colorSchemes: { light: {}, dark: {} },
  // ...other properties
});

export default theme;
