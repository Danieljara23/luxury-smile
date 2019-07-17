import React, {useState} from 'react';
import { EspecialistsList } from './EspecialistList'
import { ReactComponent as IcoCalidad } from '../../images/ico-calidad.svg'
import { ReactComponent as Flecha } from '../../images/ico-flecha.svg'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const isMobile = window.innerWidth < 600;


const Especialist = () => {
    const [galleryItems, setGalleryItems] = useState(
        EspecialistsList.map((i) => (
            <div className={`${ isMobile ? 'especialist-card-mobile':'w-30'}`}  >
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

    )
    const handleOnDragStart = (e:any) => e.preventDefault()
   
    
    
    return(
        <div className="w-100 mt5 pb5">
            <div className="w-100">
                <h3 className="especialist-title">Especialistas</h3>
            </div>
            <div className="w-100 flex justify-center especialist-container">
                {
                    isMobile ? (
                        <AliceCarousel mouseDragEnabled
                            buttonsDisabled={true}
                            items={galleryItems} 
                        />
                    ):(
                        [galleryItems]
                    )
                }
               
            </div>
        </div>
    )
}
export default Especialist