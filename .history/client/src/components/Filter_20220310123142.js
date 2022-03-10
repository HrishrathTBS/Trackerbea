import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import BookData from './Products';
const Filter = () => {
  const [data, setData] = useState(Products);
  const [filterValues, setFilterValues] = useState({
    category: '',
    searchText: '',
  });

  const filterResult = () => {
    const result = Products.filter((prod) => {
      return (
        (filterValues.category ? prod.category === filterValues.category : prod) &&
        (filterValues.searchText
          ? prod.category.toLowerCase().includes(filterValues.searchText.toLowerCase()) || prod.title.toLowerCase().includes(filterValues.searchText.toLowerCase())
          : prod)
      );
    });
    setData(result);
  };

  useEffect(() => {
    filterResult();
  }, [filterValues]);
  return (
    <>
      <Grid container justifyContent='center' spacing={2} m={1}>
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
      </Grid>
    </>
  );
};

export default Filter;
