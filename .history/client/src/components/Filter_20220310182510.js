import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './LabelData';
import SearchIcon from '@mui/icons-material/Search';
const Filter = () => {
  const [teams, setTeams] = useState([...teams_data]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const test = teams.filter((team) => {
      return (
        team.HeaderText.toLowerCase().toUpperCase().includes(e.target.value.toLowerCase()) ||
        team.NotesText.toLowerCase().includes(e.target.value.toLowerCase()) ||
        team.TitleText.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setTeams(test);
    setSearch(e.target.value);
  };

  return (
    <>
      <Grid container justifyContent='center' m={1}>
        <Grid item xs={4}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              sx={{ bgcolor: 'GrayText' }}
              autoComplete='text'
              value={search}
              color='warning'
              variant='outlined'
              fullWidth
              id='search'
              label='Search'
              onChange={handleChange}
              autoFocus
              required
            />
            <SearchIcon sx={{ position: 'relative', right: '40px' }} />
          </Box>
          {teams.map((team) => (
            <>
              <p>{team.HeaderText}</p>
              <p>{team.TitleText}</p>
              <p>{team.NotesText}</p>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
