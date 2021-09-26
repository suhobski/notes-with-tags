import React, { useState } from 'react'
import {
  Button, Card, makeStyles, TextField,
} from '@material-ui/core'
import { connect } from 'react-redux'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { editNote } from '../store/actions/board'
import './ModalEditNote.scss'

const useStyles = makeStyles({
  modalEditNote: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'grid',
    gridTemplateColumns: 'minmax(280px, 400px)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 40,
  },
  note: {
    marginBottom: 8,
    padding: 8,
    paddingBottom: 0,
    color: '#5A5A65',
    '& ul': {
      display: 'inline-block',
      width: '100%',
      margin: '0 8px 0 0',
      padding: 8,
      paddingBottom: 0,
      listStyleType: 'none',
      borderRadius: 4,
      background: '#F8F8F8',
      border: 'none',
      color: '#FFFFFF',
    },
  },
  note__title: {
    marginBottom: 8,
  },
  note__text: {
    marginBottom: 8,
    padding: '8px 16px',
    borderRadius: 4,
    background: '#F8F8F8',
  },
  note__date: {
    fontSize: 12,
    borderRadius: 4,
    marginBottom: 8,
  },
  'note__tag-list': {
    margin: 0,
    padding: 8,
    minHeight: 40,
    borderRadius: 4,
    background: '#F8F8F8',
  },
  note__tag: {
    position: 'relative',
    display: 'inline-block',
    margin: '0 16px 8px 0',
    padding: '0 4px',
    listStyleType: 'none',
    borderRadius: 4,
    background: '#5A5A65',
    color: '#FFFFFF',
  },
  'note__tag--addTag': {
    display: 'inline-block',
    height: 56,
    margin: '8px 0 8px 8px',
    padding: '0 4px',
    listStyleType: 'none',
    borderRadius: 4,
    background: '#5BD497',
    border: 'none',
    color: '#FFFFFF',
  },
  tagInputWrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto 100px',
  },
  footer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    margin: '8px 0',
    '& Button': {
      display: 'inline-block',
    },
  },
})

const CssTextField = styled(TextField)({
  '&': {
    margin: '8px 0',
  },
  '& label.Mui-focused': {
    color: '#5A5A65',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#5A5A65',
    },
  },
})

const ModalEditNote = ({ closeModal, note, onEditNote }) => {
  const classes = useStyles()
  const {
    noteDate, noteId, noteTags, noteText,
  } = note
  const [editNoteTags, setEditNoteTags] = useState(noteTags)
  const [addTag, setAddTag] = useState('')
  const date = `${noteDate.toLocaleTimeString().substring(0, 5)} ${noteDate.toLocaleDateString()}`

  const handleChangeTag = (e) => {
    setAddTag(e.target.value)
  }

  const onAddTagClick = () => {
    if (addTag.length > 0) {
      if (addTag[0] === '#') {
        setEditNoteTags([...editNoteTags, addTag])
        setAddTag('')
      } else {
        setEditNoteTags([...editNoteTags, `#${addTag}`])
        setAddTag('')
      }
    }
  }

  const deleteTag = (deleteTag) => {
    const newTags = editNoteTags.filter(tag => tag !== deleteTag)
    setEditNoteTags(newTags)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('editNote').length > 0) {
      // eslint-disable-next-line no-console
      onEditNote({
        noteId,
        noteText: data.get('editNote'),
        noteTags: editNoteTags,
        noteDate: new Date(),
      })
      closeModal()
    }
  }

  return (
    <Box className={classes.modalEditNote} onSubmit={handleSubmit} component="form" noValidate>
      <Card className={classes.note}>
        <h2 className={classes.note__title}>Edit note</h2>
        <p className={classes.note__date}>{date}</p>
        <article>
          <h4>Text:</h4>
          <CssTextField
            className={classes.modalEditNote__textInput}
            id="editNote"
            name="editNote"
            variant="outlined"
            label="Edit text"
            multiline
            maxRows={4}
            fullWidth
            defaultValue={noteText}
          />
        </article>
        <article>
          <h4>Tags:</h4>
          <ul className={classes['note__tag-list']}>
            {
                  editNoteTags.length > 0
                    ? editNoteTags.map((tag, index) => <li className={classes.note__tag} key={tag + index}>{tag}<button className="note__tag--delete" onClick={() => deleteTag(tag)} /></li>)
                    : <p>...</p>
              }
          </ul>
          <div className={classes.tagInputWrapper}>
            <CssTextField
              value={addTag}
              onChange={handleChangeTag}
              className={classes.modalEditNote__textInput}
              name="addTag"
              variant="outlined"
              label="Write a tag..."
            />
            <Button
              onClick={onAddTagClick}
              variant="contained"
              className={classes['note__tag--addTag']}
              key="AddTag"
            >
              Add tag
            </Button>
          </div>
        </article>
        <footer className={classes.footer}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
          >
            Ok
          </Button>
          <Button
            onClick={() => closeModal()}
            fullWidth
            variant="contained"
          >
            Cancel
          </Button>
        </footer>
      </Card>
    </Box>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    onEditNote: note => dispatch(editNote(note)),
  }
}

export default connect(null, mapDispatchToProps)(ModalEditNote)
