import React from 'react'
import {Card, makeStyles} from "@material-ui/core"
import Filter from './Filter';
import Note from './Note';


const useStyles = makeStyles({
    board: {
        padding: 8,
        background: '#FFFFFF',
        borderRadius: 12,
        color: '#5A5A65',
    },
    board__title: {
        marginBottom: 8,
    },
    notesWrapper: {
        padding: 8,
        background: '#F8F8F8',
    }
})

const Board = () => {

    const classes = useStyles();

    return (
        <Card className={classes.board}>
            <h2 className={classes.board__title}>Board</h2>
            <Filter />
            <Card className={classes.notesWrapper}>
                <Note />
                <Note />
                <Note />
            </Card>
        </Card>    
    );
}

export default Board;