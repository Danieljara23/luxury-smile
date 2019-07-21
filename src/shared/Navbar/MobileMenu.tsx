import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

import './MobileMenu.css'

const useStyles = makeStyles({
    menuLink: {
        color: 'white',
        textTransform: 'uppercase',
        padding: '2px',
        fontSize: '13px'
    },
    listItemMenu: {
        borderBottom: '1px solid gray'
    },
    appointment:{
        borderRadius: 24,
        backgroundColor: 'white',
        fontSize: 13,
        color: 'black',
        textTransform: 'uppercase',
    }
});

interface Props {
    showMenu: boolean
    isFixed: boolean
}
const MobileMenu = (props: Props) => {
    const classes = useStyles();
    return (
            <ul className={`mt0 pa4 header flex-column absolute w-100 items-center mobile-menu ${props.showMenu ? 'flex grow-menu' : 'dn'} ${props.isFixed ?'fixed-mobile ':''}`}>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/">Inicio</NavLink></li>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/Consultory">Consultorio</NavLink></li>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/Treatments">Tratamientos</NavLink></li>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/Especialists">Especialistas</NavLink></li>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/Testimonies">Testimonios</NavLink></li>
                <li className={`w-100 pa2 tl ${classes.listItemMenu}`}><NavLink className={`${classes.menuLink}`} to="/Contact">Contacto</NavLink></li>
                <li className={`w-100 pa2 tc pt4 `}><NavLink to="/Appointment" className={`${classes.appointment} no-underline pa2 ph4 dib`}>Pide tu cita aquí</NavLink></li>
            </ul>
    )
}
export default MobileMenu