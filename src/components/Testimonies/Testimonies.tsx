import React from 'react'
import './Testimonies.css'
import ConsultoryExperience from '../Consultory/ConsultoryExperience'
import '../Consultory/ConsultoryExperience.css'
import Advantages from '../Home/HomeComponents/Advantage'

const Testimonies = () => {
    return(
        <div className="w-100">
            <h4 className="testimonies-title">Testimonios</h4>
            <div className="w-100 luxury-experience-background flex items-center justify-center">
                <h6>#Experiencias <span>Luxury</span></h6>
            </div>
            <div className="w-100 testimonies-experience">
                <ConsultoryExperience/>
            </div> 
            <div className="w-100 custom-border-top">
                <Advantages/>
            </div>
        </div>
    )
}

export default Testimonies