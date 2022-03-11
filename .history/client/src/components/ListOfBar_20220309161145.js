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
    <div>
      <Typography sx={{ fontWeight: 'bold' }}>Website Redesign</Typography>
      <Stack direction='row' spacing={1}>
        <Chip label='Custom delete icon' onClick={handleClick} onDelete={handleDelete} deleteIcon={<DoneIcon />} />
      </Stack>
    </div>
  );
};

export default ListOfBar;
