import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { connect } from 'react-redux';
import { Box } from '@mui/system';
import setTag from '../../store/actions/filter';

const FilterWrap = styled(Box)({
  position: 'relative',
  top: -2,
  display: 'flex',
  justifyContent: 'right',
  marginBottom: '0.5rem',
  padding: '0.5rem',
  color: '#5a5a65',
});

const FilterInput = styled('input')({
  display: 'inline-block',
  width: '100%',
  paddingLeft: 8,
  border: 'none',
  borderBottom: '1px solid #5a5a65',
  '&:focus': {
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #5a5a65',
  },
});

const CloseFilterButton = styled(IconButton)({
  position: 'absolute',
  top: -4,
  right: 2,
  display: 'inlone-block',
});

const Filter = ({ onSetTag, closeFilter }) => {
  const [inputTag, setInputTagTag] = useState('');

  const handleChange = (e) => {
    const tagText = e.target.value;
    setInputTagTag(tagText);
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

function mapDispatchToProps(dispatch) {
  return {
    onSetTag: (tag) => dispatch(setTag(tag)),
  };
}

export default connect(null, mapDispatchToProps)(Filter);
