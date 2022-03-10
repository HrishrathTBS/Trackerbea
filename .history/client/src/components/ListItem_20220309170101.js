import { ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
const ListItem = ({ primary }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <ListItemButton
      alignItems='flex-start'
      sx={{
        px: 3,
        pt: 2.5,
        pb: open ? 0 : 2.5,
        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 1 } },
      }}
    >
      <ListItemText
        primary={primary}
        primaryTypographyProps={{
          fontSize: 20,
          width: '220px',
          fontWeight: 'medium',
          lineHeight: '20px',
          mb: '2px',
        }}
      />
      <AddCircleIcon color='success' />
      <KeyboardArrowDown
        onClick={() => setOpen(!open)}
        sx={{
          opacity: 1,
          px: 2,
          transform: open ? 'rotate(-180deg)' : 'rotate(0)',
          transition: '0.5s',
        }}
      />
    </ListItemButton>
    {open &&
      data.map((item) => (
        <ListItemButton key={item.label} sx={{ py: 2, minHeight: 32, color: 'rgba(0,0,0,1)', justifyContent: 'flex-start' }}>
          <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
          <ListItemText>
            <a href={item.link} style={{ textDecoration: 'none', color: 'black' }}>
              {item.label}
            </a>
          </ListItemText>
        </ListItemButton>
      ))}
  );
};
export default ListItem;
