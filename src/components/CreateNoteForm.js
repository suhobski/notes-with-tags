import React, { useState } from 'react'
import {Button, Card, makeStyles, TextField} from "@material-ui/core"
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 8,
        color: '#5A5A65',
        background: '#FFFFFF',
        borderRadius: 12,
    },
    textInput: {
        width: '100%',
        margin: '8px 0',
    },
    'note__tag-list': {
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
}))

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#5A5A65',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#5A5A65',
      },
    },
  });

const CreateNoteForm = () => {
    const classes = useStyles();
    const [note, setNote] = useState('');
    const [tags, setTags] = useState(null);
    
    const handleChange = (e) => {
        const noteText = e.target.value 
        const noteTags = noteText.match(/#[a-zа-я0-9]+/gui);
        setTags(Array.from(new Set(noteTags)));
        setNote(noteText)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
          note: data.get('note'),
          noteTags: tags
        });
        setNote('');
        setTags(null);
      };

    return (
        <Card className={classes.root}>
            <h2>Create note</h2>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <CssTextField 
                    className={classes.textInput}
                    id="note"
                    name='note'
                    variant="outlined"
                    label="write note..."
                    multiline
                    maxRows={4}
                    value={note}
                    onChange={handleChange}
                    autoFocus
                />
                <ul className={classes['note__tag-list']}>
                    {
                        tags && tags.map((tag, index) => <li className={classes.note__tag} key={tag + index}>{tag}</li>)
                    }
                </ul>
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    // sx={{ mt: 3, mb: 2 }}
                >
                    Ok
                </Button>
            </Box>
            
        </Card>    
    );
}

export default CreateNoteForm;