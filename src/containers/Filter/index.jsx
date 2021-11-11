import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import CloseFilterButton from './CloseFilterButton';
import FilterInput from './FilterInput';
import FilterWrap from './FilterWrap';
import { changeFilterVisibility, setTag } from '../../store/actions/filter';
import { validateFilterTag } from '../../utils';

const Filter = ({ filterTag, onSetTag, changeVisibility }) => {
  const handleChange = (event) => {
    const newFilterTag = validateFilterTag(event.target.value);
    onSetTag(newFilterTag);
  };

  const handleCloseFilter = () => {
    onSetTag('');
    changeVisibility(false);
  };

  return (
    <FilterWrap>
      <FilterInput
        type="text"
        autoFocus
        value={filterTag}
        onChange={handleChange}
      />
      <CloseFilterButton size="large" onClick={handleCloseFilter}>
        <CloseIcon />
      </CloseFilterButton>
    </FilterWrap>
  );
};

Filter.propTypes = {
  filterTag: PropTypes.string.isRequired,
  onSetTag: PropTypes.func.isRequired,
  changeVisibility: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filterTag: state.filter.filterTag,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSetTag: (tag) => dispatch(setTag(tag)),
    changeVisibility: (filterVisibility) =>
      dispatch(changeFilterVisibility(filterVisibility)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
