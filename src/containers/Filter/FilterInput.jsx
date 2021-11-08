import { styled } from '@mui/material/styles';

const FilterInput = styled('input')({
  display: 'inline-block',
  width: '100%',
  paddingLeft: 8,
  border: 'none',
  borderBottom: '1px solid #5a5a65',
  background: '#f8f8f8',
  '&:focus': {
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #5a5a65',
  },
});

export default FilterInput;
