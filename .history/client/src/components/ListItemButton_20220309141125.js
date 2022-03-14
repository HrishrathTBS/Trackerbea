import React from 'react';

const ListItemButton = () => {
  return (
    <div>
      <ListItemButton
        alignItems='flex-start'
        sx={{
          px: 3,
          pt: 2.5,
          pb: open ? 0 : 2.5,
          '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 1 } },
        }}
      >
        <ListItemText
          primary='TODO'
          primaryTypographyProps={{
            fontSize: 20,
            width: '220px',
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
        />
        <AddCircleIcon color='success' />
        <KeyboardArrowDown
          onClick={() => setOpen(!open)}
          sx={{
            opacity: 1,
            px: 2,
            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
            transition: '0.5s',
          }}
        />
      </ListItemButton>
    </div>
  );
};

export default ListItemButton;
