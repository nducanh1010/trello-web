import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useColorScheme } from "@mui/material";
function App() {
  const { mode, setMode } = useColorScheme();
  return (
    <>
      <AcUnitIcon></AcUnitIcon>
      <Button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        variant="contained"
      >
        Hello
        {mode === "light" ? "dark" : "light"}
      </Button>
    </>
  );
}

export default App;
