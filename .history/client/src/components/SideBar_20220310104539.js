import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from './ListItem';
import People from '@mui/icons-material/People';
import Dns from '@mui/icons-material/Dns';
import LabelIcon from '@mui/icons-material/Label';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);

  const DataItem = [
    {
      label: 'Todos',
      data: [
        { icon: <DeveloperBoardIcon />, label: 'Board', link: '/board' },
        { icon: <Dns />, label: 'My Todos ', link: '/mytodos' },
      ],
    },
    {
      label: 'Notes',
      data: [
        { icon: <LabelIcon />, label: 'label1', link: '/label1' },
        { icon: <LabelIcon />, label: 'label2 ', link: '/label2' },
        { icon: <LabelIcon />, label: 'label3 ', link: '/label3' },
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', height: '90vh' }}>
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
            background: { paper: 'rgba(71, 98, 130, 0.2)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 370 }}>
          <FireNav component='nav' disablePadding>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              {DataItem.map(({ data, label }) => (
                <ListItem key={index} data={data} label={label} />
              ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
