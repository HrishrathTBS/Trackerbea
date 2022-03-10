import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = () => {
  const [searchData, setSearchData] = useState('');

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <>
      <Grid container justifyContent='center' spacing={2} m={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete='text'
            value={searchData}
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
      </Grid>
    </>
  );
};

export default Filter;
