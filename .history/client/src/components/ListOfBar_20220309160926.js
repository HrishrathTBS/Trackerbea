import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
const ListOfBar = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  }
  return <div>
    
  </div>;
};

export default ListOfBar;


export default function CustomDeleteIconChips() {
  
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
    </Stack>
  );
}
