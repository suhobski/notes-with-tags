import {makeStyles, Paper} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        background: 'red',
        // position: 'relative',
        // display: 'flex',
        // alignItems: 'flex-start',
        // [theme.breakpoints.down('sm')]: {
        //     flexDirection: 'column',
        //     justifyItems: 'stretch',
        // }
    },
  }))

const App = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <header>
                <h1>Hello!</h1>
            </header>
            <p>Article</p>
        </Paper>
    );
}

export default App;
