import { Button, styled } from '@material-ui/core';

const ButtonAddNote = styled(Button)({
  position: 'fixed',
  bottom: 16,
  right: 16,
  height: 64,
  borderRadius: '50%',
  textAlign: 'center',
  fontSize: '1.75rem',
  zIndex: 50,
  transition: 'all 0.3s ease-out',
});

export default ButtonAddNote;
