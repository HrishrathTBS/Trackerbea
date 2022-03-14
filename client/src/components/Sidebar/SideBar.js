import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import ListItem from "./ListItem";
import Dns from "@mui/icons-material/Dns";
import People from "@mui/icons-material/People";
import NotesIcon from "@mui/icons-material/Notes";
import GroupsIcon from "@mui/icons-material/Groups";

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);

  const SidebarConfig = [
    {
      label: "Todo",
      data: [
        { icon: <People />, label: "Board", link: "/board" },
        { icon: <Dns />, label: "My Todos ", link: "/mytodos" },
      ],
    },
    {
      label: "Notes",
      data: [{ icon: <NotesIcon />, label: "Note", link: "/notes" }],
    },
    {
      label: "Teams",
      data: [
        { icon: <GroupsIcon />, label: "Team1", link: "/Team1" },
        { icon: <GroupsIcon />, label: "Team2 ", link: "/Team2" },
      ],
    },
  ];

  return (
    <Box sx={{ display: "flex", height: "90vh" }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            background: { paper: "rgba(71, 98, 130, 0.2)" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 370 }}>
          <FireNav component="nav" disablePadding>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                pb: open ? 2 : 0,
              }}
            >
              {SidebarConfig.map(({ label, data }, i) => (
                <ListItem data={data} label={label} />
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
