import { Badge, Box, Button, SvgIcon, TextField, Tooltip } from "@mui/material";
import ModeSelect from "@/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as trelloLogo } from "@/assets/trello.svg";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import { HelpOutline, NotificationsNone } from "@mui/icons-material";
import Profiles from "./Menus/Profiles";
function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon
          sx={{
            color: "primary.main",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SvgIcon
            component={trelloLogo}
            inheritViewBox
            fontSize="small"
            sx={{
              color: "primary.main",
            }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
            variant="span"
          >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
        />
        <ModeSelect />
        <Tooltip title="Notifications">
          <Badge sx={{ cursor: "pointer" }} color="secondary" variant="dot">
            <NotificationsNone sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: "pointer" ,color: "primary.main"}} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
