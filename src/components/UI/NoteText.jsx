import React from 'react';
import Typography from '@mui/material/Typography';

export default function NoteText({ children, ...props }) {
  return (
    <Typography variant="body1" py="8px" fontSize="1.25rem" {...props}>
      {children}
    </Typography>
  );
}
