import { styled, Button } from '@mui/material';

const ButtonAddTag = styled(Button)({
  display: 'inline-block',
  height: 56,
  margin: '0.5rem',
  marginRight: 0,
  padding: '0 0.25rem',
  listStyleType: 'none',
  borderRadius: 4,
  background: '#5bd497',
  border: 'none',
  color: '#ffffff',
  '&:hover': {
    background: '#57cf92',
  },
});

export default ButtonAddTag;
