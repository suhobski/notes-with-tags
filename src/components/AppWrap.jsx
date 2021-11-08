import { Container, styled } from '@mui/material';

const AppWrap = styled(Container)({
  position: 'relative',
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  minHeight: '100vh',
  padding: 8,
  borderRadius: 0,
  background: '#4D4D4D',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  zIndex: 0,
});

export default AppWrap;
