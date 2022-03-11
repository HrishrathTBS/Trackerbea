import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './Products';
const Filter = () => {
  // const [searchData, setSearchData] = useState('');
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
      <div>
        <input type='text' value={search} onChange={handleChange} />
        {teams.map((team) => (
          <p>{team}</p>
        ))}
      </div>
      {/* <Grid container justifyContent='center' spacing={2} m={1}>
        <Grid item xs={12}>
          <TextField
            autoComplete='text'
            // value={searchData}
            color='warning'
            variant='outlined'
            fullWidth
            id='search'
            label='search....'
            onChange={handleChange}
            autoFocus
            required
          />
        </Grid>
        {BookData.filter((val) => {
          if (searchData == '') {
            return val;
          } else if (val.label.toLowerCase().includes(searchData.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.label}</p>
            </div>
          );
        })}
      </Grid> */}
    </>
  );
};

export default Filter;
