import { Grid, TextField } from '@mui/material';
import React from 'react';

const Filter = () => {
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
            // onChange={handleChange}
            autoFocus
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Filter;
