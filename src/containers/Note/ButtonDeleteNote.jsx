import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDeleteNote = ({ deleteNote }) => (
  <IconButton
    onClick={deleteNote}
    aria-label="delete"
    size="small"
    sx={{
      position: 'absolute',
      top: 0,
      right: 4,
    }}
  >
    <DeleteIcon size="small" color="text.secondary" />
  </IconButton>
);

ButtonDeleteNote.propTypes = {
  deleteNote: PropTypes.func.isRequired,
};

export default ButtonDeleteNote;
