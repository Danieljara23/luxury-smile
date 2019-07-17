import React, { useState, useEffect } from 'react';
import { ExperienceList } from './ExperienceList'
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AliceCarousel from 'react-alice-carousel';

const useStyles = makeStyles(
    createStyles({
        root: {
            backgroundColor: 'white',
            color: '#4D5766',
            fontSize: '12px',
            fontWeight: 500
        }
    }),
);

const ExperienceCarousel = () => {
    const classes = useStyles();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [galleryItems, setGalleryItems] = useState(
        ExperienceList.map((item) => (
            <div className="experience-background w-100">
                <div className="img-experience dib mt4">
                    <img src={item.imgPath} alt={item.name}/>
                </div>
                <h6 className="pt3 white experience-title mv2">{item.name}</h6>
                <p className="b white experience-type">Paciente <Chip className={classes.root} label={item.treatmentType} /></p>
                <div className="w-100 flex justify-center pb3">
                    <p className="white experience-description w-60">{item.description}</p>
                </div>
            </div>
        ))
    )

    return(
        <>
        
        <div style={{"padding":0,"maxWidth":"100%","margin":"0"}} className="experience-container-carousel">
            <AliceCarousel mouseDragEnabled
                    buttonsDisabled={false}
                    dotsDisabled={false}
                    items={galleryItems}
                />
        </div>
        </>
    )
}

export default ExperienceCarousel