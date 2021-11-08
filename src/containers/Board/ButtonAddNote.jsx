import { Button, styled } from '@mui/material';

const ButtonAddNote = styled(Button)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  height: 64,
  borderRadius: '50%',
  backgroundColor: '#999999',
  textAlign: 'center',
  fontSize: '1.75rem',
  zIndex: 50,
  transition: 'all 0.3s ease-out',
  '&:hover': {
    backgroundColor: '#888888',
  },
});

export default ButtonAddNote;
