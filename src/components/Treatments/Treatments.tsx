import React, { useState } from 'react'
import TreatmentsList from '../Home/HomeComponents/TreatmentsList'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../images/ico-flecha.svg'

import './Treatments.css'

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
            cursor: 'pointer'
        },
        readMore:{
            color:'#69ABBE',
            fontWeight: 100
        }
    }),
);

const TreatmentsSection = () => {
    const classes = useStyles();

    const filterBadges = [
        TreatmentsList.map((item) => (
            <div className="ph2">
                <span>
                    <Chip className={classes.root} label={item.title} />
                </span>
            </div>
        ))
    ]

    const galleryItems = [
        TreatmentsList.map((item) => (
            <div className="card-container ma3">
                <div className="card-image">
                    <img src={item.imagePath} alt={item.title} />
                </div>
                <h3 className="cards-title mb3 mt4">{item.title}</h3>
                <div className="treatment-description-container ph3 pt0 pb2">
                    <p className="treatment-description">{item.description.substring(0, 81) + "..."}</p>
                </div>
                <div className="w-100 flex ph3">
                    <Link className={`${classes.readMore} ttu read-more-card` } underline='none'>Leer más <Flecha /></Link>
                </div>
                <div className="pt3 pb4 flex justify-center">
                    <Link className={`${classes.dateLink} ttu card-date-button`} underline='none'>Pide tu cita aquí</Link>
                </div>
            </div>

        ))
    ]

    return (
        <div className="w-100">
            <h4>Tratamientos</h4>
            <div className="treatment-content">
                <div className="w-100 treatments-types flex pa3 justify-center">
                    {filterBadges}
                </div>
                <div className="treatments flex pa3 flex-wrap justify-center">
                    {galleryItems}
                </div>
            </div>
        </div>
    )
}

export default TreatmentsSection