import React, { useState, useEffect } from 'react';
import { TreatmentsList } from './TreatmentsList'
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../../images/ico-flecha.svg'
import AliceCarousel from 'react-alice-carousel';


const CardsCarousel = () => {
    
    const isMobile = window.innerWidth < 480;
    const showItems = isMobile ? 1 : 3;
    const responsive = {
            0: {
                items: 1
            },
            600:{
                items:2
            },
            800:{
                    items:3
            },
            1024: {
                    items: 3
                }
            }
                        
    
                        
    const [galleryItems, setGalleryItems] = useState(
        TreatmentsList.map( (item) => (
            <div>
                <img src={item.imagePath} alt={item.title}/>
                <h3 className="cards-title mb3 mt4">{item.title}</h3>
                        <div className="treatment-description-container ph3 pt2 pb2">
                            <p className="treatment-description">{item.description}</p>
                        </div>
                        <div className="w-100 flex ph3">
                            <Link className={` ttu read-more-card`}>Leer más <Flecha/></Link>
                        </div>
                        <div>
                        <Link className={` ttu card-date-button`}>Pide tu cita aquí</Link>
                        </div>
            </div>
            
         ))
        )
        const handleOnDragStart = (e:any) => e.preventDefault()
    return(
        <>
            <div className="treatments-container" >
                <AliceCarousel mouseDragEnabled
                    buttonsDisabled={true}
                    dotsDisabled={false}
                    items={galleryItems}
                    responsive={responsive}
                />
                   
            </div>
        
        </>
    )
}

export default CardsCarousel