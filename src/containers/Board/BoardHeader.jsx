import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter';

const Header = styled('header')({
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

export default function BoardHeader({ isFilterOpen, closeFilter, openFilter }) {
  return (
    <Header>
      <h2>Filter</h2>
      {isFilterOpen ? (
        <Filter closeFilter={closeFilter} />
      ) : (
        <IconButton size="large" onClick={openFilter} mb="0">
          <SearchIcon />
        </IconButton>
      )}
    </Header>
  );
}

BoardHeader.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  closeFilter: PropTypes.func.isRequired,
  openFilter: PropTypes.func.isRequired,
};
