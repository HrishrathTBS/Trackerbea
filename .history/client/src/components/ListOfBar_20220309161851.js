import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
const ListOfBar = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  return (
    <>
      <div>
        <Typography sx={{ fontWeight: 'bold' }}>Website Redesign</Typography>
        <Stack direction='column' spacing={2}>
          <Chip label='Daily Triage of redesign feedback' onClick={handleClick} />
          <Chip label='Lunch new home page' onClick={handleClick} />
        </Stack>
      </div>
      <div>
        <Typography sx={{ fontWeight: 'bold' }}>Website Redesign</Typography>
        <Stack direction='column' spacing={2}>
          <Chip label='Daily Triage of redesign feedback' onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} />
          <Chip label='Lunch new home page' onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} />
        </Stack>
      </div>
    </>
  );
};

export default ListOfBar;
