import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { ReactComponent as Logo } from '../../components/images/logo-luxury-smile.svg'
import { ReactComponent as LogoBlack } from '../../components/images/logo-luxury-smile-black.svg'
import { ReactComponent as MenuMobile } from '../../components/images/menu-mobile.svg'
import './MobileMenu.css'
interface Props{
    isFixed: boolean
}
const isMobile = window.innerWidth < 768;

const useStyles = makeStyles({
    logo: {

    },
    root: {
      flexGrow: 1,
      zIndex: 12,
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
        color: 'white',
        '&:hover':{
            color: '#69ABBE'
        }
    },
    headerLinkFixed: {
        color: '#9D9D9D',
        '&:hover': {
            color: '#4D5766'
        }
    },
    dateButton: {
        color: '#4D5766',
        backgroundColor: 'white',
        borderRadius: '30px',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '13px',
        lineHeight: 'normal',
        padding: '10px 20px',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#C9C9C9'
        }
    },
    fixedDateButton: {
        backgroundColor: '#87D2E7',
        color: 'white',
        '&:hover': {
            backgroundColor: '#6499A8'
        }
    },
    menuLink: {
        color: 'white',
        textTransform: 'uppercase',
        padding: '2px',
        fontSize: '13px'
    },
    listItemMenu: {
        borderBottom: '1px solid gray'
    },
    listItemMenuMobile: {
        padding: '4px 2px',
        fontSize: 17
    },
    appointment:{
        borderRadius: 24,
        backgroundColor: 'white',
        fontSize: 13,
        color: 'black',
        textTransform: 'uppercase',
    },
    appointMentMobile:{
        fontSize: 17,
        fontWeight: 'bold'
    }
  });
  
function NavBar(props:Props) {
    const { isFixed } = props
    const classes = useStyles();
    const [ showMenu, setshowMenu ] = useState(false)
    return (
        <div className={`${classes.root}  ${isFixed! ? 'fixed w-100 top-0':'relative'}`}>
            <AppBar position="static" className={`${ isFixed ? classes.fixedAppBar : classes.appBar} app-custom-bar`} elevation={2}>
                <Toolbar className="flex">
                <div className="w-30 luxury-logo tl">
                    <NavLink className={classes.logo} to="/">
                        {
                            isFixed ? (<div className="mt1"><LogoBlack/></div>):(<Logo/>)
                        }
                    </NavLink>
                    
                </div>
                <div className="w-70 navbar-links">
                    <MenuMobile className="hamburguer-icon" onClick={() => setshowMenu(!showMenu)} />
                    <ul className={`header flex-row items-center ${isMobile ? 'dn': 'flex'}`}>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/">Inicio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/Consultory">Consultorio</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/Treatments">Tratamientos</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/Especialists">Especialistas</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/Testimonies">Testimonios</NavLink></li>
                        <li><NavLink className={`${classes.headerLink} ${isFixed ? classes.headerLinkFixed:''} ttu ph2 ${isMobile ? 'dn': 'dib'}`} to="/Contact">Contacto</NavLink></li>
                        <li><NavLink to="/Appointment" className={`${classes.dateButton} ${ isFixed ? classes.fixedDateButton:''} ttu no-underline pa2 dib ${isMobile ? 'dn': 'dib'}`}>Pide tu cita aquí</NavLink></li>
                    </ul>
                    <ul className={`mt0 pa4 header flex-column absolute w-100 items-center mobile-menu ${showMenu ? 'flex grow-menu' : 'dn'} ${isFixed ?'fixed-mobile ':''}`}>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/" onClick={()=>setshowMenu(false)}>Inicio</NavLink></li>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/Consultory" onClick={()=>setshowMenu(false)}>Consultorio</NavLink></li>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/Treatments" onClick={()=>setshowMenu(false)}>Tratamientos</NavLink></li>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/Especialists" onClick={()=>setshowMenu(false)}>Especialistas</NavLink></li>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/Testimonies" onClick={()=>setshowMenu(false)}>Testimonios</NavLink></li>
                        <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink} ${classes.listItemMenuMobile}`} to="/Contact" onClick={()=>setshowMenu(false)}>Contacto</NavLink></li>
                        <li className={`w-100 pa2 tc pt4 `}><NavLink to="/Appointment" className={`${classes.appointment} ${classes.appointMentMobile} no-underline pa2 ph4 dib`}>Pide tu cita aquí</NavLink></li>
                    </ul>
                    
                </div>
                
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar