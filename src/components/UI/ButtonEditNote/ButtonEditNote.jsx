import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const ButtonEditNote = (props) => (
  <IconButton
    aria-label="delete"
    size="small"
    sx={{
      position: 'absolute',
      top: 0,
      right: 40,
    }}
    {...props}
  >
    <EditIcon size="small" color="text.secondary" />
  </IconButton>
);

export default ButtonEditNote;
