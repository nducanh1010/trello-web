import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// confirm dialog recommend
import { ConfirmProvider } from "material-ui-confirm";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CssVarsProvider theme={theme}>
    <ConfirmProvider>
      <CssBaseline />
      <App />
      <ToastContainer theme="colored" position="bottom-left" />
    </ConfirmProvider>
  </CssVarsProvider>
);
