import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './Products';
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
      <Grid container justifyContent='center' spacing={2} m={1}>
        <Grid item xs={12}>
          <TextField autoComplete='text' value={search} color='warning' variant='outlined' fullWidth id='search' label='search....' onChange={handleChange} autoFocus required />
          {/* {teams.map((team) => (
            <p>{team}</p>
          ))} */}
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
