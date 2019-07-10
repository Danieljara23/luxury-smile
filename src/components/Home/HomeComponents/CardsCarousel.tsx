import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { TreatmentsList } from './TreatmentsList'
import { TreatmentModel } from '../../../shared/models/TreatmentModel'



const useStyles = makeStyles(
    createStyles({
        card: {
        maxWidth: 345,
        },
        media: {
        height: 140,
        },
    }),
);

const CardsCarousel = () => {

    console.log(TreatmentsList)
    const classes = useStyles();

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    useEffect( () => {
        console.log(activeItemIndex)
    } )

    return(
        <>
        
        <div style={{"padding":0,"maxWidth":"100%","margin":"0"}}>
            <ItemsCarousel
                gutter={12}
                activePosition={'center'}
                chevronWidth={60}
                numberOfCards={3}
                slidesToScroll={3}
                outsideChevron={true}
                showSlither={false}
                firstAndLastGutter={false}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={(value:any) => setActiveItemIndex(value)}
                rightChevron={'>'}
                leftChevron={'<'}
            >
                {
                    TreatmentsList.map( (item,i) => (
                        <Card className={classes.card}  key={i}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.imagePath}
                                    title={item.title}
                                />
                                <CardContent>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="flex justify-center">
                                <Button size="small" color="primary" className="w-50">
                                    Pide tu cita aquí
                                </Button>
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