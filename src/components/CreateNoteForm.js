import React from 'react'
import {Card, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        padding: 8,
        color: '#5A5A65',
        background: '#FFFFFF',
        borderRadius: 12,
        // [theme.breakpoints.down('xs')]: {
        //     display: 'none',
        // }
    }
}))

const CreateNoteForm = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <h2>Create note</h2>
        </Card>    
    );
}

export default CreateNoteForm;