import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const Filter = () => {
  const [searchData, setSearchData] = useState('');
  return (
    <>
      <Grid container justifyContent='center' spacing={2} mb={3}>
        <Grid item xs={12}>
          <TextField
            autoComplete='email'
            // value={values.email}
            color='warning'
            name='email'
            variant='outlined'
            fullWidth
            id='email'
            label='Email'
            onChange={setSearchData(event.target.value)}
            autoFocus
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;