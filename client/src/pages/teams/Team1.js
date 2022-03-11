import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import logo from '../../assets/images/teamwork.jpg';
const Team1 = () => {
  return (
    <>
      <Box sx={{ background: '#e5e5e5' }}>
        <Box sx={{ borderRadius: '10px', margin: '10px', boxShadow: '1px 1px 15px black', overflow: 'hidden' }}>
          <Avatar src={logo} sx={{ width: '300px', height: '240px' }} variant='square' />
          <Box sx={{ bgcolor: '#fff' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
              <Typography>Respberry waffle</Typography>
              <Typography>$12</Typography>
            </Box>
            <Typography sx={{ marginInline: '10px', color: '#9fa0a1' }}>
              Define fluid dimensions for cards, lists <br></br> and image lists
            </Typography>
            <Box>
              <Button variant='contained' sx={{ margin: '10px', width: '93%', padding: '0px', fontWeight: 'bold' }}>
                ADD TO CART
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Team1;
