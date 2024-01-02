import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Box, MenuItem, Select, useColorScheme } from "@mui/material";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
function App() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <>
      <Select
        labelId="lebel-select-dark-light"
        value={mode}
        label={mode}
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>

      <AcUnitIcon></AcUnitIcon>
      <Button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        variant="contained"
      >
        Hello {mode}
      </Button>
    </>
  );
}

export default App;
