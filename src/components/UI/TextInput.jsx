import React from 'react';
import { styled, TextField } from '@mui/material';

const CssTextField = styled(TextField)({
  '&': {
    margin: '8px 0',
    background: '#f8f8f8',
  },
  '& label.Mui-focused': {
    color: '#5A5A65',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#5a5a65',
    },
  },
});

const TextInput = (props) => (
  <CssTextField variant="outlined" fullWidth {...props} />
);

export default TextInput;
