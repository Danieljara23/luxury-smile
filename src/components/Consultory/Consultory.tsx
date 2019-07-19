import React from 'react'
import { ReactComponent as DocCarlos } from '../images/ico-doc-carlos.svg'
import Advantage from '../Home/HomeComponents/Advantage'
import ConsultoryExperience from './ConsultoryExperience'
import Contact from '../Home/HomeComponents/Contact'
import './Consultory.css'


const Consultory = () => {
    return(
        <div className="w-90 center">
            <h4 className="consultory-main-title">Consultorio</h4>
            <div className="w-100 flex flex-row">
                <div className="w-50">

                </div>
                <div className="w-50 flex flex-column items-start">
                    <h6 className="consultory-subtitle">Luxury Smile</h6>
                    <p className="consultory-subtitle-paragraph">Fundación y estética dental</p>
                    <DocCarlos/>
                    <p className="consultory-subtitle-description">Somos un consultorio ubicados en la ciudad de medellin,  con excelentes especialistas preparados en las principales universidades del pais, contamos con habilitacion en las diferentes areas de la odontologia, rehabilitacion oral, periodoncia, endodoncia, cirugia oral, todo en el mismo lugar.</p>

                    <p  className="consultory-third-subtitle">¿Por qué elegirnos?</p>
                    <div className="consultory-advantage-container w-60">
                        <Advantage/>
                    </div>
                </div>
            </div>
            <div className="consultory-experience-carousel w-100">
                <ConsultoryExperience/>
            </div>
            <div className="consultory-contact w-100">
                <Contact/>
            </div>
            <div className="consultory-contact-info w-100 flex mv2">
                <div className="w-100">
                    <p>WhatsApp: 301 371 90 26</p>
                </div>
                <div className="w-100">
                    <p>557 84 16 - 350 873 60 90</p>
                </div>
                <div className="w-100">
                    <p>luxurysmilecolombia@gmail.com</p>
                </div>
                <div className="w-100">
                    <p>@luxurysmilecolombia</p>
                </div>
            </div>
        </div>
    )
}

export default Consultory