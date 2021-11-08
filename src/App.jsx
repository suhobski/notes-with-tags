import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardContent, Container, styled } from '@material-ui/core';
import Header from './components/Header';
import Board from './containers/Board';
import Footer from './components/Footer';
import CreateNoteForm from './containers/CreateNoteForm';

const AppWrapper = styled(Container)({
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

const MainContent = styled(CardContent)({
  display: 'grid',
  gridTemplateColumns: 'minmax(300px, 33%) auto',
  alignItems: 'stretch',
  gap: 8,
  padding: '8px 0',
});

const App = () => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <AppWrapper maxWidth="md">
      <Header />
      <MainContent
        style={{
          gridTemplateColumns: matches ? 'auto' : 'minmax(300px, 33%) auto',
        }}
      >
        <CreateNoteForm formDisplay={matches ? 'none' : 'block'} />
        <Board />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
};

export default App;
