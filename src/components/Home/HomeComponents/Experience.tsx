import React from 'react';
import ExperienceCarousel from './ExperienceCarousel'

const Experience = () => {
    return(
        <div className="w-100 flex">
            <div className="w-50 luxury-experience flex items-center justify-center">
                <h6 >#Experiencias<span>Luxury</span></h6>
            </div>
            <div className="w-50">
                <ExperienceCarousel/>
            </div>
        </div>
    )
}
export default Experience