import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import { teams_data } from './LabelData';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
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
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  return (
    <>
      {/* <div>
        <input type='text' value={search} onChange={handleChange} />
        {teams.map((team) => (
          <p>{team}</p>
        ))}
      </div> */}
      <Grid container justifyContent='center' m={1}>
        <Grid item xs={12}>
          <TextField
            autoComplete='text'
            value={search}
            color='warning'
            variant='outlined'
            fullWidth
            id='search'
            label='search....'
            onChange={handleChange}
            autoFocus
            required
          ></TextField>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
          </Search>
          {teams.map((team) => (
            <p>{team}</p>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
