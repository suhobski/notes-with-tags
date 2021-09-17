import React from 'react'
import {Card, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    note: {
        marginBottom: 8,
        '&:last-child': {
            marginBottom: 0,
        },
        padding: 8,
        '&__text': {

        },
        
    },
    'note__date': {
        
    },
    'note__tag-list': {
        margin: 0,
    },
    'note__tag': {
        display: 'inline-block',
        padding: '0 4px',
        listStyleType: 'none',
        borderRadius: 4,
        background: '#5A5A65',
        color: '#FFFFFF',
    }
})

const Note = () => {

    const classes = useStyles();

    return (
        <Card className={classes.note}>
            <p className={classes.note__date}>15.09.2021 22:32</p>
            <p className={classes.note__text}>I want go to the #shop</p>
            <ul className={classes['note__tag-list']}>
                <li className={classes.note__tag}>#shop</li>
            </ul>
        </Card>    
    );
}

export default Note;