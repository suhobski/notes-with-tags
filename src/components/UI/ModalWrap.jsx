import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const ModalWrap = styled(Box)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(264px, 500px)',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 40,
});

export default ModalWrap;
