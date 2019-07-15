import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
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

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    useEffect( () => {
        console.log(activeItemIndex)
    } )

    return(
        <>
            <div className="treatments-container" >
                <ItemsCarousel
                    gutter={20}
                    activePosition={'center'}
                    chevronWidth={60}
                    numberOfCards={showItems}
                    slidesToScroll={showItems}
                    outsideChevron={false}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={activeItemIndex}
                    requestToChangeActive={(value:any) => setActiveItemIndex(value)}
                    rightChevron={<div className="custom-chevron">{'>'}</div>}
                    leftChevron={<div className="custom-chevron">{'<'}</div>}
                    className="cards-carousel"
                >
                    {
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
                    }
                
                </ItemsCarousel>
            </div>
        
        </>
    )
}

export default CardsCarousel