import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDeleteNote = (props) => (
  <IconButton
    aria-label="delete"
    size="small"
    sx={{
      position: 'absolute',
      top: 0,
      right: 4,
    }}
    {...props}
  >
    <DeleteIcon size="small" color="text.secondary" />
  </IconButton>
);

export default ButtonDeleteNote;
