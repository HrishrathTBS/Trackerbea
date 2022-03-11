import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Products from './Products';
const Filter = () => {
  const [searchData, setSearchData] = useState('');

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <>
      <Grid container justifyContent='center' spacing={2} m={1}>
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
        {Products.filter((val) => {
          if (searchData == '') {
            return val;
          } else if (val.label.toLoverCase().includes(searchData.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div key={key}>
              <p>{val.label}</p>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default Filter;
