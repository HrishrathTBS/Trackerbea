import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <>
      <Grid container justifyContent='center' spacing={2} mb={3}>
        <Grid item xs={12}>
          <TextField
            autoComplete='text'
            // value={values.email}
            color='warning'
            name=''
            variant='outlined'
            fullWidth
            id='search'
            label='search'
            onChange={setSearchData}
            autoFocus
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
