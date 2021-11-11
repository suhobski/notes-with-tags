import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Filter from '../Filter';
import { changeFilterVisibility } from '../../store/actions/filter';

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

const BoardHeader = ({ isFilterOpen, changeVisibility }) => (
  <Header>
    <h2>Filter</h2>
    {isFilterOpen ? (
      <Filter />
    ) : (
      <IconButton size="large" onClick={() => changeVisibility(true)} mb="0">
        <SearchIcon />
      </IconButton>
    )}
  </Header>
);

BoardHeader.propTypes = {
  isFilterOpen: PropTypes.bool.isRequired,
  changeVisibility: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isFilterOpen: state.filter.isFilterOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeVisibility: (filterVisibility) =>
      dispatch(changeFilterVisibility(filterVisibility)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardHeader);
