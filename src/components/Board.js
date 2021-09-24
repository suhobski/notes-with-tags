import React, { useEffect, useState } from 'react'
import {Button, Card, makeStyles} from "@material-ui/core"
import Filter from './Filter';
import Note from './Note';
import { connect } from 'react-redux';
import CreateNoteForm from './CreateNoteForm';

const useStyles = makeStyles(theme => ({
    board: {
        position: 'relative',
        padding: '16px 8px',
        background: '#FFFFFF',
        borderRadius: 12,
        color: '#5A5A65',
        '& > Button': {
            position: 'fixed',
            bottom: 16,
            right: 16,
            padding: 6,
            width: 40,
            textAlign: 'right',
            fontSize: 28,
            borderRadius: 100,
            zIndex: 30,
            transition: 'all .3s ease-out',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            }
        }
    },
    board__title: {
        marginBottom: 8,
    },
    notesWrapper: {
        padding: 8,
        background: '#F8F8F8',
        color: '#5A5A65',
    },
    ModalCreateNote: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'grid',
        gridTemplateColumns: 'minmax(280px, 400px)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 16px',
    }
}));

const Board = ({notes, filterTag}) => {
    const classes = useStyles();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [buttonRotate, setButtonRotate] = useState(0);
    const [boardNotes, setBoardNotes] = useState(notes);
    
    const handleModalClick = e => {
        if (e.target.classList.contains('MuiCard-root')) {
            setIsOpenModal(false);
            setButtonRotate(0);
        }
    }

    const handleButton = () => {
        if (buttonRotate === 0) setButtonRotate('45deg');
        if (buttonRotate === '45deg') setButtonRotate(0);
        setIsOpenModal(!isOpenModal);
    }

    const closeModal = () => {
        setIsOpenModal(false);
        setButtonRotate(0);
    }

    useEffect(() => {
        if (filterTag.length >= 2) {
            setBoardNotes(notes.filter(note => note.noteTags.includes(filterTag)))
        } else {
            setBoardNotes(notes)
        }
    }, [notes, filterTag])

    return (
        <Card className={classes.board}>
            <h2 className={classes.board__title}>Board</h2>
            <Filter />
            <Card className={classes.notesWrapper}>
                <h3>Notes</h3>
                {
                    boardNotes.length === 0
                    ? <p>...</p>
                    : boardNotes.map((note, index) => <Note note={note} key={note.noteText + index}/>)
                }
            </Card>
            <Button 
                className={classes.button} 
                variant="contained" 
                onClick={handleButton}
                style={{transform: `rotate(${buttonRotate})`}}
            >
                +
            </Button>
            {
                isOpenModal 
                ?   <Card className={classes.ModalCreateNote} onClick={handleModalClick}>
                        <CreateNoteForm closeModal={() => closeModal()}/>
                    </Card>
                :   null 
            }
            
        </Card>    
    );
}

function mapStateToProps(state) {
    return {
        notes: state.board.notes,
        filterTag: state.filter.tag,
    }
}

export default connect(mapStateToProps)(Board);