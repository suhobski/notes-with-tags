import React from 'react';
import { styled, TextField } from '@material-ui/core';

const CssTextField = styled(TextField)({
  '&': {
    margin: '8px 0',
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