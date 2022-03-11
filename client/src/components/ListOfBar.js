import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
const ListOfBar = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <>
      <div>
        <Box sx={{ display: 'flex' }}>
          <DesktopMacIcon />
          <Typography sx={{ fontWeight: 'bold' }}>Website Redesign</Typography>
        </Box>
        <Stack direction='column' spacing={2}>
          <Chip label='Daily Triage of redesign feedback' onClick={handleClick} />
          <Chip label='Lunch new home page' onClick={handleClick} />
        </Stack>
      </div>
      <div>
        <Box sx={{ display: 'flex' }}>
          <BorderColorOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold' }}>Blog And article Creation</Typography>
        </Box>
        <Stack direction='column' spacing={2}>
          <Chip label='Review announcement blog' onClick={handleClick} />
        </Stack>
      </div>
      <div>
        <Box sx={{ display: 'flex' }}>
          <EmailOutlinedIcon />
          <Typography sx={{ fontWeight: 'bold' }}>Email News letter</Typography>
        </Box>
        <Stack direction='column' spacing={2}>
          <Chip label='company dogs email newsletter?' onClick={handleClick} />
        </Stack>
      </div>
    </>
  );
};

export default ListOfBar;
