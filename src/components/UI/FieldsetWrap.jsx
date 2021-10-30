import React from 'react';
import { Box } from '@mui/material';

export default function FieldsetWrap({ children, ...props }) {
  return (
    <Box
      bgcolor="#f8f8f8"
      p={1}
      mb={2}
      borderRadius="4px"
      border="1px solid #cccccc"
      {...props}
    >
      {children}
    </Box>
  );
}
