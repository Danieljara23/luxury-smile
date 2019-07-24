import React, { useState } from 'react'
import EspecialistList from '../Home/HomeComponents/EspecialistList'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../images/ico-flecha.svg'
import { ReactComponent as IcoCalidad } from '../images/ico-calidad.svg'
import { NavLink } from "react-router-dom";
import './Especialists.css'

const useStyles = makeStyles(
    createStyles({
        root: {
            backgroundColor: 'white',
            color: '#AFAFAF',
            fontSize: '12px',
            fontWeight: 500
        },
        dateLink: {
            color: 'white',
            padding: 10,
            paddingLeft: 12,
            paddingRight: 12,
            fontWeight: 600,
            cursor: 'pointer',
            backgroundColor: '#69ABBE',
            textDecoration: 'none',
            borderRadius: 19
        },
        readMore:{
            color:'#69ABBE',
            fontWeight: 100
        },
    }),
);
const isMobile = window.innerWidth < 768;

const EspecialistsSection = () => {
    const classes = useStyles();

    const filterBadges = [
        EspecialistList.map((item) => (
            <div className="ph2">
                <span>
                    <Chip className={classes.root} label={item.fieldName} />
                </span>
            </div>
        ))
    ]

    const galleryItems = [
        EspecialistList.map((i) => (
            <div className={`${ isMobile ? 'especialist-card-mobile':'especialist-card-desktop ma3 especialist-card'}`}  >
                { i.discount ? (
                    <div className="relative discount-badge"><p>{i.discount}<span> DCTO</span></p> </div>
                ):(
                    <div className="relative discount-badge no-discount"><p></p> </div>
                )
                
                }
                <div className="especialist-image">
                    <img src={i.imgPath} alt={i.name}/>
                </div>
                <div className="especialist-info mt3 flex flex-column justify-center items-center">
                    <p className="especialist-name"><span className="especialist-prefix">{i.prefixType}.</span> {i.name}</p>
                    <p className="especialist-school">{i.schoolName}</p>
                    <div className="quality-icon"><IcoCalidad/></div>
                    <p className="especialist-treatment">{i.fieldName}</p>
                    <p className="especialist-read-more">Leer más <Flecha/></p>
                </div>
            </div>
        ))
    ]

    return (
        <div className="w-100">
            <h4 className="especialist-title">Especialistas</h4>
            <div className="especialist-content">
                <div className="w-100 especialist-types flex pa3 justify-center">
                    {filterBadges}
                </div>
                <div className="especialists flex pa3 flex-wrap justify-center">
                    {galleryItems}
                </div>
                <div className="w-100 flex flex-row justify-center pv3">
                    <NavLink className={`${classes.dateLink} } ttu ph2 `} no-underline to="/Appointment">Pide tu cita aquí</NavLink>
                </div>
            </div>
        </div>
    )
}

export default EspecialistsSection