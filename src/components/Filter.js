import React from 'react'
import {Card, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        marginBottom: 8,
        padding: 8,
        background: '#F8F8F8',
    }
})

const Filter = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <p>Filter</p>
        </Card>    
    );
}

export default Filter;