import React, { useState, useEffect } from 'react';
// import ItemsCarousel from 'react-items-carousel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { TreatmentsList } from './TreatmentsList'
import { TreatmentModel } from '../../../shared/models/TreatmentModel'
import LinesEllipsis from 'react-lines-ellipsis'
import Link from '@material-ui/core/Link';
import { ReactComponent as Flecha } from '../../images/ico-flecha.svg'
import AliceCarousel from 'react-alice-carousel';

const useStyles = makeStyles(
    createStyles({
        dateLink:{
            color:'white',
            padding: 10,
            paddingLeft: 12,
            paddingRight: 12,
            fontWeight: 600
        },
        card: {
            maxWidth: 300,
            boxShadow: '#31313129 0px 3px 6px',
            borderRadius: 9
        },
        mobileCard: {
            boxShadow: '#31313129 0px 3px 6px',
            borderRadius: 9
        },
        media: {
            height: 220,
        },
        cardContent:{
            paddingBottom:0,
            padding:0
        },
        readMore:{
            color:'#69ABBE'
        },
        root:{
            padding: 15,
            paddingBottom: 25
        }
    }),
);

const CardsCarousel = () => {

    const isMobile = window.innerWidth < 480;
    const showItems = isMobile ? 1 : 3;
    const classes = useStyles();
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

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [galleryItems, setGalleryItems] = useState(
        TreatmentsList.map( (item,i) => (
                            
                            <Card className={`${ isMobile ? classes.mobileCard:classes.card}`} key={i}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.imagePath}
                                        title={item.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <h3 className="cards-title mb3 mt4">{item.title}</h3>
                                        <div className="treatment-description-container ph3 pt2 pb2">
                                            {/* <p className="treatment-description">{item.description}</p> */}
                                            <LinesEllipsis
                                                text={item.description}
                                                maxLine='2'
                                                ellipsis='...'
                                                trimRight
                                                basedOn='letters'
                                                className="treatment-description"
                                                />
                                        </div>
                                        <div className="w-100 flex ph3">
                                            <Link className={`${classes.readMore} ttu read-more-card`}>Leer más <Flecha/></Link>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={`flex justify-center pa3 ${classes.root}`}>
                                    <Link className={`${classes.dateLink} ttu card-date-button`}>Pide tu cita aquí</Link>
                                </CardActions>
                            </Card>
                        ))
                    )
    useEffect( () => {
        console.log(activeItemIndex)
    } )

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