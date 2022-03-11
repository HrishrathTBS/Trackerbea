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
      <input
        type='text'
        value={filterValues.searchText}
        placeholder='SEARCH HERE.....'
        onChange={(e) => {
          setFilterValues({ ...filterValues, searchText: e.target.value });
        }}
      />
    </>
  );
};

export default Filter;
