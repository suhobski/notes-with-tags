import React from 'react'
import {Card, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    note: {
        marginBottom: 8,
        padding: 8,
        paddingBottom: 0,
        color: '#5A5A65',
        '&:last-child': {
            marginBottom: 0,
        },        
    },
    note__text: {
        padding: '8px 0',
    },
    'note__date': {
        fontSize: 12,
        borderRadius: 4,
    },
    'note__tag-list': {
        margin: 0,
    },
    'note__tag': {
        display: 'inline-block',
        margin: '0 8px 8px 0',
        padding: '0 4px',
        listStyleType: 'none',
        borderRadius: 4,
        background: '#5A5A65',
        color: '#FFFFFF',
    }
})

const Note = ({note}) => {
    const classes = useStyles();
    const {noteDate, noteText, noteTags} = note;
    const date = noteDate.toLocaleTimeString().substring(0, 5) + ' ' + noteDate.toLocaleDateString();

    return (
        <Card className={classes.note}>
            <p className={classes.note__date}>{date}</p>
            <p className={classes.note__text}>{noteText}</p>
            <ul className={classes['note__tag-list']}>
            {
                noteTags && noteTags.map((tag, index) => <li className={classes.note__tag} key={tag + index}>{tag}</li>)
            }
            </ul>
        </Card>    
    );
}

export default Note;