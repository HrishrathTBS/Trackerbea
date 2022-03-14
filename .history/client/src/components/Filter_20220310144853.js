import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './LabelData';
import SearchIcon from '@mui/icons-material/Search';
const Filter = () => {
  const [teams, setTeams] = useState([...teams_data]);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const test = teams.filter((team) => {
      return team.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setTeams(test);
    setSearch(e.target.value);
  };
  return (
    <>
      {/* <div>
        <input type='text' value={search} onChange={handleChange} />
        {teams.map((team) => (
          <p>{team}</p>
        ))}
      </div> */}
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={12} sx={{ display: 'flex' }}>
          <TextField autoComplete='text' value={search} color='warning' variant='outlined' fullWidth id='search' label='search....' onChange={handleChange} autoFocus required />
          <SearchIcon />
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
