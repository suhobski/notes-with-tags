import React from 'react'
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    footer: {
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        background: 'transparent',
    }
})

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p className={classes.footer__text}>2021, made by Alex Sukhobski</p>
        </footer>    
    );
}

export default Footer;