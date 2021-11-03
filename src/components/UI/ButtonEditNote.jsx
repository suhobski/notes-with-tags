import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const ButtonEditNote = ({ openEditModal, sx }) => (
  <IconButton onClick={openEditModal} aria-label="delete" size="small" sx={sx}>
    <EditIcon size="small" color="text.secondary" />
  </IconButton>
);

ButtonEditNote.propTypes = {
  openEditModal: PropTypes.func.isRequired,
  sx: PropTypes.shape({
    position: PropTypes.string,
    top: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
};

export default ButtonEditNote;
