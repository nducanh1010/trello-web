import {
  AddToDrive,
  Bolt,
  Dashboard,
  FilterList,
  PersonAdd,
  VpnLock,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from "@mui/material";

const MENU_STYLES = {
  color: "primary.main",
  border: "none",
  borderRadius: "4px",
  bgcolor: "white",
  px: "5px",
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};
function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "",
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<Dashboard />} clickable label="board" />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLock />}
          clickable
          label="Public/Private Workspace"
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDrive />}
          clickable
          label="Add To Google Drive"
        />
        <Chip sx={MENU_STYLES} icon={<Bolt />} clickable label="Automation" />
        <Chip sx={MENU_STYLES} icon={<FilterList />} clickable label="Filter" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button startIcon={<PersonAdd />} variant="outlined">
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
            },
          }}
        >
          <Tooltip title="abc">
            <Avatar
              alt="Remy Sharp"
              src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(1).png?raw=true"
            />
          </Tooltip>

          <Avatar
            alt="Travis Howard"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(10).png?raw=true"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(11).png?raw=true"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(12).png?raw=true"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(13).png?raw=true"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(2).png?raw=true"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(3).png?raw=true"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(4).png?raw=true"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://github.com/nducanh1010/share-hosting-files/blob/main/avatar%20(5).png?raw=true"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
