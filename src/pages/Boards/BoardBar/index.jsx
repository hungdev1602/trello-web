import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const MENU_STYLE = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};

function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
        borderBottom: "1px solid white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label="HungDev Board"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          // clickable
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          // clickable
          onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "white" },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: "10px",
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
              color: "white",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
          <Tooltip title="HungDev">
            <Avatar
              alt="HungDev"
              src="https://avatars.githubusercontent.com/u/158856626?v=4"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
