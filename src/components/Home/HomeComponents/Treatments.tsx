import React from 'react';
import  CardsCarousel  from '../HomeComponents/CardsCarousel'


const Treatments = () => {
    return(
        <div className="w-100 mt4 ph5 flex flex-column">
            <div className="w-100">
                <h3>Tratamientos</h3>
            </div>
            <CardsCarousel/>
        </div>
        
    )
}

export default Treatments