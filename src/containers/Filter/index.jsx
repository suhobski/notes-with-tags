import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { connect } from 'react-redux';
import setTag from '../../store/actions/filter';
import CloseFilterButton from './CloseFilterButton';
import FilterInput from './FilterInput';
import FilterWrap from './FilterWrap';

const Filter = ({ onSetTag, closeFilter }) => {
  const [inputTag, setInputTag] = useState('');

  const handleChange = (e) => {
    const tagText = e.target.value;
    setInputTag(tagText);
    onSetTag(`#${tagText.trim()}`);
  };

  const handleCloseFilter = () => {
    onSetTag('');
    closeFilter();
  };

  return (
    <FilterWrap>
      <FilterInput
        type="text"
        autoFocus
        value={inputTag}
        onChange={handleChange}
      />
      <CloseFilterButton size="large" onClick={handleCloseFilter}>
        <CloseIcon />
      </CloseFilterButton>
    </FilterWrap>
  );
};

Filter.propTypes = {
  onSetTag: PropTypes.func.isRequired,
  closeFilter: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onSetTag: (tag) => dispatch(setTag(tag)),
  };
}

export default connect(null, mapDispatchToProps)(Filter);
