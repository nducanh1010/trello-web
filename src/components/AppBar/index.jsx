import {
  Badge,
  Box,
  Button,
  InputAdornment,
  SvgIcon,
  TextField,
  Tooltip,
} from "@mui/material";
import ModeSelect from "@/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as trelloLogo } from "@/assets/trello.svg";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import {
  Close,
  HelpOutline,
  LibraryAdd,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
import Profiles from "./Menus/Profiles";
import { useState } from "react";
function AppBar() {
  const [search, setSearch] = useState("");
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        paddingX: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon
          sx={{
            color: "white",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{
              color: "white",
            }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
            variant="span"
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": {
                border: "none",
              },
            }}
            startIcon={<LibraryAdd />}
            variant="outlined"
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          sx={{
            minWidth: 120,
            maxWidth: 180,
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          id="outlined-search"
          label="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <Close
                onClick={() => setSearch("")}
                fontSize="small"
                sx={{
                  color: search ? "white" : "transparent",
                  cursor: "pointer",
                }}
              />
            ),
          }}
          type="text"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge sx={{ cursor: "pointer" }} color="warning" variant="dot">
            <NotificationsNone sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
