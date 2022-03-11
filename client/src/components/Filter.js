import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './LabelData';
import SearchIcon from '@mui/icons-material/Search';
const Filter = () => {
  const [teams, setTeams] = useState([...teams_data]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? teams
    : teams.filter(
        (person) =>
          person.NotesText.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          person.HeaderText.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          person.TitleText.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <Grid container justifyContent='center' m={1}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', position: 'fixed' }}>
            <TextField autoComplete='text' value={search} color='warning' variant='outlined' fullWidth id='search' label='Search' onChange={handleChange} autoFocus required />
            <SearchIcon sx={{ position: 'relative', right: '40px' }} />
          </Box>
          <Box sx={{ marginTop: '70px' }}>
            {filtered.map((team) => (
              <>
                <p>{team.HeaderText}</p>
                <p>{team.TitleText}</p>
                <p>{team.NotesText}</p>
              </>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
