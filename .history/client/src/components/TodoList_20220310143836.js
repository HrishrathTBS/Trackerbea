import React from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, Typography } from '@mui/material';
const TodoList = ({ text, id, onSelect }) => {
  return (
    <>
      <div>
        <Box style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Typography mx={2}>{text}</Typography>
          <HighlightOffIcon color='warning' onClick={() => onSelect(id)} />
        </Box>
      </div>
    </>
  );
};
export default TodoList;
