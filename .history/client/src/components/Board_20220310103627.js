import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import TodoList from './TodoList';
import { Typography } from '@material-ui/core';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/HighlightOff';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Board = () => {
  const [list, setList] = useState('');
  const [items, setItems] = useState([]);
  const [value, setValue] = useState('This is a task');
  const [data, setData] = useState('This is another task');

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleClick = () => {
    if (list == '') {
    } else {
      setItems((oldItems) => {
        return [...oldItems, list];
      });
      setList('');
    }
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((curEle, index) => {
        return index !== id;
      });
    });
  };
  const handleChanges = (event) => {
    setValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setData(event.target.value);
  };
  return (
    <>
      <div>
        <Typography style={{ textAlign: 'center', fontSize: '30px' }}>Very Real Project</Typography>
        <Box style={{ display: 'flex' }} mx={5} my={3}>
          <Grid item xs={12} style={{ width: '500px' }} py={2}>
            <TextField autoComplete='text' value={list} color='warning' variant='filled' fullWidth label='Add task' onChange={handleChange} autoFocus required />
          </Grid>
          <AddCircleIcon style={{ marginTop: '28' }} color='success' fontSize='large' onClick={handleClick} />
        </Box>
        <ol>
          {items.map((itemval, index) => (
            <TodoList key={index} id={index} text={itemval} onSelect={deleteItem} />
          ))}
        </ol>
        <div style={{ marginLeft: '30px' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
              <Typography>This is a Section</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id='demo-controlled-radio-buttons-group'></FormLabel>
                <RadioGroup aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={value} onChange={handleChanges}>
                  <FormControlLabel value='this is a task' control={<Radio />} label='This is a task' />
                  <FormControlLabel value='this is a another task' control={<Radio />} label='This is a another task' />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
        <div style={{ marginLeft: '30px', marginTop: '20px' }}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
              <Typography>This is a another Section</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id='demo-controlled-radio-buttons-group'></FormLabel>
                <RadioGroup aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={data} onChange={handleChange1}>
                  <FormControlLabel value='it has sub task' control={<Radio />} label='it has sub task' />
                  <FormControlLabel value='so many sub task' control={<Radio />} label='so many sub task' />
                  <FormControlLabel
                    value='Honesty this is already three layers do you really need more'
                    control={<Radio />}
                    label='Honesty this is already three layers do you really need more'
                  />
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: '50px', right: '50px' }}>
        <Stack spacing={2}>
          <Pagination count={7} variant='outlined' shape='rounded' />
        </Stack>
      </div>
    </>
  );
};

export default Board;
