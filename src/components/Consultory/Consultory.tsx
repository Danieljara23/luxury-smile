import React from 'react'
import { ReactComponent as DocCarlos } from '../images/ico-doc-carlos.svg'
import Advantage from '../Home/HomeComponents/Advantage'
import ConsultoryExperience from './ConsultoryExperience'
import Contact from '../Home/HomeComponents/Contact'
import  Imageconsultory from '../images/img-consultorio.jpg'
import ContactInfo from '../ContactInfo/ContactInfo'
import './Consultory.css'
import ConsultoryCarousel from './ConsultoryCarousel'
import Mision from './Mision'
const Consultory = () => {
    return(
        <div className="w-90 center consultory-mobile">
            <h4 className="consultory-main-title">Nosotros</h4>
            <div className="w-100 flex flex-row consultory-container">
                <div className="w-50 image-consultory">
                    <img src={Imageconsultory} alt="Image consultory"/>
                </div>
                <div className="w-50 flex flex-column items-start">
                    <h6 className="consultory-subtitle">Luxury Smile</h6>
                    <p className="consultory-subtitle-paragraph">Función y estética dental</p>
                    <DocCarlos/>
                    <p className="consultory-subtitle-description">Somos un consultorio ubicados en la ciudad de Medellin,  con excelentes especialistas preparados en las principales universidades del pais, contamos con habilitacion en las diferentes areas de la odontologia, rehabilitacion oral, periodoncia, endodoncia, cirugia oral, todo en el mismo lugar.</p>

                    <p  className="consultory-third-subtitle">¿Por qué elegirnos?</p>
                    <div className="consultory-advantage-container w-60">
                        <Advantage/>
                    </div>
                </div>
            </div>
            <div className="consultory-experience-carousel w-100">
                <ConsultoryCarousel/>
            </div>
            <div className="consultory-experience-carousel w-100">
                {/* <ConsultoryExperience title="Nuestros clientes hablan por nosotros"/> */}
                <Mision/>
            </div>
            <div className="consultory-contact w-100">
                <Contact/>
            </div>
            <ContactInfo/>
        </div>
    )
}

export default Consultory