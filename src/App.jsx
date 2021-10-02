import React from 'react';
import { CardContent, makeStyles, Paper } from '@material-ui/core';
import Header from './components/Header/Header';
import CreateNoteForm from './containers/CreateNoteForm/CreateNoteForm';
import Board from './containers/Board/Board';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh',
    padding: 8,
    borderRadius: 0,
    background: '#4D4D4D',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    zIndex: 0,
  },
  main: {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 33%) auto',
    gap: 8,
    padding: '8px 0',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'auto',
    },
  },
  form: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Header />
      <CardContent className={classes.main}>
        <div className={classes.form}>
          <CreateNoteForm />
        </div>
        <Board />
      </CardContent>
      <Footer />
    </Paper>
  );
};

export default App;
