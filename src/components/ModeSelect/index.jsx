import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useColorScheme,
} from "@mui/material";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
export default function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light">Mode</InputLabel>
        <Select value={mode} onChange={handleChange} label="Mode" style={{}}>
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
      </FormControl>
    </>
  );
}
