import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardContent, Container, styled } from '@material-ui/core';
import Header from './components/Header/Header';
import CreateNoteForm from './containers/CreateNoteForm/CreateNoteForm';
import Board from './containers/Board/Board';
import Footer from './components/Footer/Footer';

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
  gap: 8,
  padding: '8px 0',
});

const App = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <AppWrapper maxWidth="md">
      <Header />
      <MainContent
        style={{
          gridTemplateColumns: matches ? 'minmax(300px, 33%) auto' : 'auto',
        }}
      >
        <div
          style={{
            display: matches ? 'block' : 'none',
          }}
        >
          <CreateNoteForm />
        </div>
        <Board />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
};

export default App;
