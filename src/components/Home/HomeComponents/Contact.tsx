import React from 'react';
import { EspecialistsList } from './EspecialistList'
import { ReactComponent as IcoCalidad } from '../../images/ico-calidad.svg'
import '../styles.css'
import  Ofix from '../../images/img-ofix.jpg'
import OfixMap from './OfixMap'
const Contact = () => {

    return(
        <div className="w-100 mt5">
            <div className="w-100">
                <h3 className="contact-title">Contáctanos</h3>
            </div>
            <div className="w-80 flex flex-row center">
                <div className="w-60 flex flex-column">
                    <div className="w-100 flex flex-row blue-container ph4 pv3">
                        <div className="w-60 custom-border flex flex-column justify-center">
                            <p className="b">Edificio Ofix 33</p>
                            <p>piso 7 - consultorio 715</p>
                            <p>Carrera 80a #32 EE - 72 - Medellín - Colombia</p>
                        </div>
                        <div className="w-40 pl4">
                            <p>Horario de atención</p> 
                            <p>Lunes a viernes: 8am - 6pm</p>
                            <p> Sábados: 8am - 12pm</p>
                        </div>
                    </div>
                    <div className="w-100">
                        <OfixMap/>
                    </div>
                </div>
                <div className="w-40">
                    <img src={Ofix} alt=""/>
                </div>
                
            </div>
        </div>
    )
}
export default Contact