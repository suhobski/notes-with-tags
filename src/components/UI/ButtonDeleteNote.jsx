import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDeleteNote = ({ top, right, ...props }) => (
  <IconButton aria-label="delete" size="small" {...props}>
    <DeleteIcon size="small" color="text.secondary" />
  </IconButton>
);

export default ButtonDeleteNote;
