import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDeleteNote = ({ sx, deleteNote }) => (
  <IconButton onClick={deleteNote} aria-label="delete" size="small" sx={sx}>
    <DeleteIcon size="small" color="text.secondary" />
  </IconButton>
);

ButtonDeleteNote.propTypes = {
  deleteNote: PropTypes.func.isRequired,
  sx: PropTypes.shape({
    position: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
};

export default ButtonDeleteNote;
