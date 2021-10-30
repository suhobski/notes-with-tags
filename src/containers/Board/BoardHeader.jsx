import React from 'react';
import { styled } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/system';
import Filter from '../Filter';

const Header = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  justifyItems: 'space-between',
  marginBottom: 8,
  paddingLeft: 8,
  background: '#f8f8f8',
  border: '1px solid #cccccc',
  borderRadius: 4,
});

export default function BoardHeader({ isFilterOpen, setIsFilterOpen }) {
  return (
    <Header>
      <h2>Filter</h2>
      {isFilterOpen ? (
        <Filter closeFilter={() => setIsFilterOpen(false)} />
      ) : (
        <IconButton size="large" onClick={() => setIsFilterOpen(true)} mb="0">
          <SearchIcon />
        </IconButton>
      )}
    </Header>
  );
}
