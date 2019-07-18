import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { ReactComponent as Logo } from '../../components/images/logo-luxury-smile.svg'
import { ReactComponent as LogoBlack } from '../../components/images/logo-luxury-smile-black.svg'
import { fontFamily } from '@material-ui/system';
import { ReactComponent as MenuMobile } from '../../components/images/menu-mobile.svg'

interface Props{
    isFixed: boolean
}

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      zIndex: 12
    },
    appBar: {
        backgroundColor: 'black',
        color: 'white',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;'
    },
    fixedAppBar: {
        backgroundColor: 'white',
        color: '#9D9D9D',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    },
    headerLink: {
        fontSize: '13px',
        fontFamily: 'Roboto',
        color: 'white'
    },
    headerLinkFixed: {
        color: '#9D9D9D'
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
    },
    fixedDateButton: {
        backgroundColor: '#87D2E7',
        color: 'white'
    }
  });
  
function NavBar(props:Props) {
    const { isFixed } = props
    const classes = useStyles();
    console.log("isFixed from Navbar:", isFixed)
    return (
        <div className={`${classes.root}  ${isFixed! ? 'fixed top w-100':'relative'}`}>
            <AppBar position="static" className={`${ isFixed ? classes.fixedAppBar : classes.appBar} app-custom-bar`} elevation={0}>
                <Toolbar className="flex">
                <div className="w-30 luxury-logo tl">
                    {
                        isFixed ? (<LogoBlack/>):(<Logo/>)
                    }
                    
                </div>
                <div className="w-70 navbar-links">
                    <MenuMobile className="hamburguer-icon" />
                    <ul className="header flex flex-row items-center">
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/">Inicio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/Other">Consultorio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/Other">Tratamientos</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/Other">Especialistas</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/Other">Testimonios</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2`} to="/Other">Contacto</NavLink></li>
                        <li><NavLink to="/" className={`${classes.dateButton} ${ isFixed ? classes.fixedDateButton:''} ttu no-underline pa2 dib`}>Pide tu cita aquí</NavLink></li>
                    </ul>
                </div>
                
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar