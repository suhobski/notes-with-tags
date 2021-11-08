import React from 'react';
import { PropTypes } from 'prop-types';
import { styled } from '@mui/material';

const ButtonDelete = styled('button')({
  position: 'absolute',
  top: -8,
  right: -8,
  width: 16,
  height: 16,
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  background: '#fa5c5c',

  '&:hover': {
    background: '#db4b4b',
  },
  '&:active': {
    background: '#db4b4b',
  },
  '&::before': {
    content: "''",
    position: 'absolute',
    top: 7,
    left: 3,
    width: 10,
    height: 2,
    background: '#f8f8f8',
    transform: 'rotate(45deg)',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    top: 7,
    left: 3,
    width: 10,
    height: 2,
    background: '#f8f8f8',
    transform: 'rotate(-45deg)',
  },
});

const ButtonDeleteTag = ({ deleteTag }) => <ButtonDelete onClick={deleteTag} />;

ButtonDeleteTag.propTypes = {
  deleteTag: PropTypes.func.isRequired,
};

export default ButtonDeleteTag;
