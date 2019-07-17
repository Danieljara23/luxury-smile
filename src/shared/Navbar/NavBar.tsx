import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { ReactComponent as Logo } from '../../components/images/logo-luxury-smile.svg'
import { fontFamily } from '@material-ui/system';
import { ReactComponent as MenuMobile } from '../../components/images/menu-mobile.svg'

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'black',
        color: 'white',
    },
    headerLink: {
        fontSize: '13px',
        fontFamily: 'Roboto',
        color: 'white'
    },
    dateButton: {
        color: '#4D5766',
        backgroundColor: 'white',
        borderRadius: '30px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '13px',
        lineHeight: 'normal',
        padding: '10px 20px',
        fontWeight: 'bold'
    }
  });
  
function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={`${classes.appBar} app-custom-bar`}>
                <Toolbar className="flex">
                <div className="w-30 luxury-logo tl">
                    <Logo/>
                </div>
                <div className="w-70 navbar-links">
                    <MenuMobile className="hamburguer-icon" />
                    <ul className="header flex flex-row items-center">
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/">Inicio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/Other">Consultorio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/Other">Tratamientos</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/Other">Especialistas</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/Other">Testimonios</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ttu ph2`} to="/Other">Contacto</NavLink></li>
                        <li><NavLink to="/" className={`${classes.dateButton} ttu no-underline pa2 dib`}>Pide tu cita aquí</NavLink></li>
                    </ul>
                </div>
                
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar