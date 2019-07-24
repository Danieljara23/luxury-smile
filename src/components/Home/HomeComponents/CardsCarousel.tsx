import React, { useState, useEffect } from 'react';
import  TreatmentsList from './TreatmentsList'
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../../images/ico-flecha.svg'
import AliceCarousel from 'react-alice-carousel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TreatmentsForm from '../../CardsForms/TreatmentsForm'
const responsive = {
    0: {
        items: 1
    },
    600: {
        items: 2
    },
    800: {
        items: 3
    },
    1024: {
        items: 3
    }
}
const useStyles = makeStyles(
    createStyles({
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
    }))
    
const CardsCarousel = () => {
    const [toggleDescription, setToggleDescription] = useState({
        itemIndex: null,
        values: false
    })
    const handleToggleParagraph = (e:any, index:any) => {
        if( toggleDescription.itemIndex == index ){
            setToggleDescription({itemIndex: index, values: !toggleDescription.values})
        }else{
            setToggleDescription({itemIndex: index, values: true})
        }
    }



    const classes = useStyles();
    const [showForm, setShowForm] = useState(false)
    const galleryItems = TreatmentsList.map((item, index) => (
            <div className="card-container" onMouseEnter={()=>setShowForm(!showForm)}>
                <div className="card-image">
                    <img src={item.imagePath} alt={item.title} />
                </div>
                <h3 className="cards-title mb3 mt4">{item.title}</h3>
                <div  className ={`treatment-description-container ph3 pt0 pb2 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'dn':'db'}`}>
                    <p className="treatment-description">{item.description.substring(0, 81) + "..."}</p>
                </div>
                <div className={`ph3 pt0 pb2 full-description ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'db':'dn'}`}>
                    <p className="treatment-description">{item.description}</p>
                </div>
                <div className={`w-100 ph3 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'dn':'flex'}`}>
                    <Link className={`${classes.readMore} ttu read-more-card pointer ` } underline='none' onClick={(e:any) => handleToggleParagraph(e, index)}>Leer más <Flecha /></Link>
                </div>
                <div className={`w-100 ph3 ${toggleDescription.itemIndex == index && toggleDescription.values == true ? 'flex':'dn'}`}>
                    <Link className={`${classes.readMore} ttu read-more-card pointer read-less` } underline='none' onClick={(e:any) => handleToggleParagraph(e, index)}>Leer menos <Flecha /></Link>
                </div>
                <div className={`pt3 pb4 flex justify-center form-container`}>
                    <TreatmentsForm/>
                    <Link className={`${classes.dateLink} ttu card-date-button`} underline='none'>Pide tu cita aquí</Link>
                </div>
            </div>

        ))
    
    const handleOnDragStart = (e: any) => e.preventDefault()
    return (
        <>
            <div className="treatments-container" >
                <AliceCarousel mouseDragEnabled
                    buttonsDisabled={false}
                    dotsDisabled={false}
                    items={galleryItems}
                    infinite ={false}
                    responsive={responsive}
                    stagePadding={{ paddingLeft: 0, paddingRight: 0 }}
                />
            </div>

        </>
    )
}

export default CardsCarousel