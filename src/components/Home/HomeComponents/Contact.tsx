import React, { useState } from 'react';
import  EspecialistsList from './EspecialistList'
import { ReactComponent as IcoCalidad } from '../../images/ico-calidad.svg'
import { ReactComponent as IcoWaze } from '../../images/ico-waze.svg'
import { ReactComponent as IcoMaps } from '../../images/ico-google-maps.svg'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import '../styles.css'
import  Ofix from '../../images/img-ofix.jpg'
import OfixMap from './OfixMap'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(
    createStyles({
        route:{
            color: '#2393B2',
            backgroundColor: 'white',
            borderRadius: 24,
            fontWeight: 'bold',
            boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.38)',
            marginLeft: 10,
            marginRight: 10,
            fontSize: 13,
            textDecoration: 'none',
            cursor: 'pointer'
        }
    })
)

interface Props {
    title?: string
}
const Contact = (props:Props) => {
    
    const classes = useStyles();
    return(
        <div className="w-100 pt3 top-border pb4">
            <div className="w-100">
                {props.title ? (
                    <h3 className="contact-title">{props.title}</h3>
                ):(<></>)}
            </div>
            {/* <div className="w-80 flex flex-row center contact-desktop">
                <div className="w-60 flex flex-column ofix-contact-photo">
                    <div className="w-100 flex flex-row blue-container ph4 pv3">
                        <div className="w-60 custom-border flex flex-column justify-center ofix-contact-info">
                            <p className="b ofix-building">Edificio Ofix 33</p>
                            <p className="fw4">piso 7 - consultorio 715</p>
                            <p>Carrera 80a #32 EE - 72 - Medellín - Colombia</p>
                        </div>
                        <div className="w-40 pl4 ofix-photo">
                            <p>Horario de atención</p> 
                            <p>Lunes a viernes: 8am - 6pm</p>
                            <p> Sábados: 8am - 12pm</p>
                        </div>
                    </div>
                    <div className="w-100 relative mt2 ofix-map">
                        <OfixMap/>
                    </div>
                </div>
                <div className="w-40 ofix-container ph3 flex items-start">
                    <img src={Ofix} alt=""/>
                </div>
                
            </div>
            <div className="w-80 flex flex-row center contact-mobile">
                    <div className="w-100 flex flex-column blue-container ph4 pv3 ofix-contact-info mv3">
                        <div className="custom-border flex flex-column justify-center">
                            <p className="b ofix-building">Edificio Ofix 33</p>
                            <p>piso 7 - consultorio 715</p>
                            <p>Carrera 80a #32 EE - 72 - Medellín - Colombia</p>
                        </div>
                        <div className="pl4 ">
                            <p>Horario de atención</p> 
                            <p>Lunes a viernes: 8am - 6pm</p>
                            <p> Sábados: 8am - 12pm</p>
                        </div>
                    

                    </div>

                <div className="w-100 ofix-container ph3 flex items-start">
                    <img src={Ofix} alt=""/>
                </div>
                <div className="relative mt2 ofix-map">
                    <OfixMap/>
                </div>
                
            </div> */}

            <div className="grid-container w-90 center">
                <div className="ContactInfo  blue-container flex flex-row items-start pa3">
                    <div className="w-60 custom-border flex flex-column justify-center ofix-contact-info">
                        <p className="b ofix-building">Edificio Ofix 33</p>
                        <p className="fw4">piso 7 - consultorio 715</p>
                        <p>Carrera 80a #32 EE - 72 - Medellín - Colombia</p>
                    </div>
                    <div className="w-40 pl4 ofix-photo">
                        <p>Horario de atención</p> 
                        <p>Lunes a viernes: 8am - 6pm</p>
                        <p> Sábados: 8am - 12pm</p>
                    </div>
                </div>
                <div className="OfixImage">
                    <img src={Ofix} alt=""/>
                </div>
                <div className="MapOfix">
                    <OfixMap/>
                </div>
            </div>
            <div className="w-100 flex items-center justify-center pb4 route-links mt4">
                <Link className={`${classes.route} ttu ph3 pv2 items-center flex see-route-link` } underline='none' href={"https://www.waze.com/ul?ll=6.23859400%2C-75.60083300&navigate=yes"} target="_blank"><span className="pr2 flex flex-row items-center" ><IcoWaze/></span> Ver ruta en Waze</Link>
                <Link className={`${classes.route} ttu ph3 pv2 items-center flex see-route-link`} underline='none' href="https://goo.gl/maps/dCEW98k1VrhqUs2s7" target="_blank"><span className="pr2 flex flex-row items-center"><IcoMaps/></span>Ver ruta en Google Maps</Link>
            </div>
        </div>
    )
}
export default Contact