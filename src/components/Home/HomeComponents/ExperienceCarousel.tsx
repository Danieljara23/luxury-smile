import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from '@material-ui/core/Button';
import { ExperienceList } from './ExperienceList'
import Chip from '@material-ui/core/Chip';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

    return(
        <>
        
        <div style={{"padding":0,"maxWidth":"100%","margin":"0"}}>
            <ItemsCarousel
                gutter={0}
                activePosition={'center'}
                chevronWidth={60}
                numberOfCards={1}
                slidesToScroll={1}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={(value:any) => setActiveItemIndex(value)}
                rightChevron={<div className="custom-chevron experience">{'>'}</div>}
                leftChevron={<div className="custom-chevron experience">{'<'}</div>}
            >
            {
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
            }              
            </ItemsCarousel>
            </div>
        </>
    )
}

export default ExperienceCarousel