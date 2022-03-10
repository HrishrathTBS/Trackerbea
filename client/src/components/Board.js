import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Grid, TextField, Typography } from "@mui/material";
import TodoList from "./TodoList";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Board = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);
  const [value, setValue] = React.useState('This is a task.');
  const [data, setData] = React.useState('It has sub tasks.');
  const [expanded, setExpanded] = React.useState(false);

  
  const handleChange = (e) => {
    setList(e.target.value);
  };
  const handleClick = () => {
    if(list===''){

    }else{
      setItems((oldItems) => {
        return [...oldItems, list];
      });
      setList("");
    }
  };

  const handleDelete = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((curEle, index) => {
        return index !== id;
      });
    });
  };

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChange2 = (event) => {
    setValue(event.target.value);
  };
  const handleChange3 = (pane2) => (event, isExpanded) => {
    setExpanded(isExpanded ? pane2 : false);
  };
  const handleChange4 = (event) => {
    setData(event.target.value);
  };

  return (
    <div style={{width:'100%'}}>
      <div style={{width:'100%'}}>
        <div>
        <Typography style={{ textAlign: "center", fontWeight: "bold" ,fontSize:'30px'}} my={3}>
          Very Real Project
        </Typography>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }} my={5} mx={5} fullWidth>
          <Grid style={{width:'50%'}}>
            <TextField
              autoComplete="email"
              color="warning"
              variant="filled"
              value={list}
              fullWidth
              label="Add task"
              onChange={handleChange}
              autoFocus
              required
            />
          </Grid>
          <AddCircleIcon
            color="success"
            fontSize="large"
            onClick={handleClick}
          />
        </Box>
        <ol>
          {items.map((itemval, index) => (
            <TodoList text={itemval} id={index} onSelect={handleDelete} />
          ))}
        </ol>
      </div>
      <div style={{width:'50%',marginLeft:'45px'}}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange1("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              This is a Section.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange2}
          >
            <FormControlLabel value="This is a task." control={<Radio />} label="This is a task." />
            <FormControlLabel value="This is another task." control={<Radio />} label="This is another task." />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center" }} fullWidth>
          <Grid style={{width:'100%'}}>
            <TextField
              autoComplete="email"
              color="info"
              variant="standard"
              value={list}
              fullWidth
              label="Add task"
              onChange={handleChange}
              autoFocus
              required
            />
          </Grid>
          <AddCircleIcon
            color="action"
            fontSize="large"
            onClick={handleClick}
          />
        </Box>
          </AccordionDetails>
        </Accordion>
       
      </div>
      <div style={{width:'50%',marginLeft:'45px',marginTop:'25px'}}>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange3("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              This is a another Section.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
          <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={data}
            onChange={handleChange4}
          >
            <FormControlLabel value="It has sub tasks." control={<Radio />} label="It has sub tasks." />
            <FormControlLabel value="So many sub tasks." control={<Radio />} label="So many sub tasks." />
            <FormControlLabel value="Honesty this is already three layers do you really need more." control={<Radio />} label="Honesty this is already three layers do you really need more." />
          </RadioGroup>
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center" }} fullWidth>
          <Grid style={{width:'100%'}}>
            <TextField
              autoComplete="email"
              color="info"
              variant="standard"
              value={list}
              fullWidth
              label="Add task"
              onChange={handleChange}
              autoFocus
              required
            />
          </Grid>
          <AddCircleIcon
            color="action"
            fontSize="large"
            onClick={handleClick}
          />
        </Box>
          </AccordionDetails>
        </Accordion>
       
      </div>
      <div style={{position:'absolute',bottom:10,right:10}}>
        <Stack spacing={2}>
          <Pagination count={3} variant="outlined" shape="rounded" size="large" color="primary" />
        </Stack>
      </div>
    </div>
  );
};

export default Board;


