import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { ReactComponent as Logo } from '../../components/images/logo-luxury-smile.svg'
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'black',
        color: 'white'
    },
    headerLink: {
        fontSize: '13px',
        fontFamily: 'Biryani'
    },
    dateButton: {
        color: '#4D5766',
        backgroundColor: 'white',
        borderRadius: '30px',
        fontFamily: "'Biryani', sans-serif",
        fontSize: '13px'
    }
  });
  
function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className="flex">
                <div className="w-30">
                    <Logo/>
                </div>
                <div className="w-70">
                    <ul className="header">
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/">Inicio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/Other">Consultorio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/Other">Tratamientos</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/Other">Especialistas</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/Other">Testimonios</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu tracked ph2`} to="/Other">Contacto</NavLink></li>
                        <NavLink to="/" className={`${classes.dateButton} ttu no-underline pa2 dib`}>Pide tu cita aquí</NavLink>
                    </ul>
                </div>
                
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar