import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const ButtonEditNote = ({ openEditNoteModal }) => (
  <IconButton
    onClick={openEditNoteModal}
    aria-label="delete"
    size="small"
    sx={{
      position: 'absolute',
      top: 0,
      right: 50,
    }}
  >
    <EditIcon size="small" color="text.secondary" />
  </IconButton>
);

ButtonEditNote.propTypes = {
  openEditNoteModal: PropTypes.func.isRequired,
};

export default ButtonEditNote;
