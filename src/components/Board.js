import React from 'react'
import {Card, makeStyles} from "@material-ui/core"
import Filter from './Filter';
import Note from './Note';
import { connect } from 'react-redux';


const useStyles = makeStyles({
    board: {
        padding: '16px 8px',
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
        color: '#5A5A65',
    }
})

const Board = ({notes}) => {

    const classes = useStyles();

    console.log('Board notes', notes);
    return (
        <Card className={classes.board}>
            <h2 className={classes.board__title}>Board</h2>
            <Filter />
            <Card className={classes.notesWrapper}>
                <h3>Notes</h3>

                {
                    notes.length === 0
                    ? null
                    : notes.map((note, index) => <Note note={note} key={note.noteText + index}/>)
                }
            </Card>
        </Card>    
    );
}

function mapStateToProps(state) {
    return {
        notes: state.board.notes,
    }
}

export default connect(mapStateToProps)(Board);